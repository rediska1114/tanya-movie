import { all } from '@redux-saga/core/effects'
import { call, put } from '@redux-saga/core/effects'
import API from '../../api'
import { ApiResponse, IGenre } from '../../interfaces'
import { RootActions, FilterActions } from '../actions'

export function* LoadConfigureSaga(): any {
	try {
		let {
			images: { secure_base_url, backdrop_sizes, poster_sizes }
		} = (yield call(API.Configuration)) as ApiResponse.Configuration
		const toNumber = (size: string) => Number.parseInt(size.replace(/[^-0-9]/, ''))

		yield put({
			type: RootActions.CONFIGURE,
			payload: {
				imagesUrl: secure_base_url,
				posterSizes: poster_sizes.map(toNumber),
				backdropSizes: backdrop_sizes.map(toNumber)
			}
		})
	} catch (error) {
		console.error(error)
	}
}

export function* LoadGenresSaga(): any {
	try {
		let genres: IGenre[] = yield call(API.GetGenres)

		yield put({
			type: FilterActions.SET_GENRES,
			payload: { genres }
		})
	} catch (error) {
		console.error(error)
	}
}

export function* ConfigureSaga(): any {
	yield all([LoadConfigureSaga(), LoadGenresSaga()])
}
