import { API } from './../../api/api'
import { call, put, select, takeEvery } from '@redux-saga/core/effects'
import { MoviesActions } from '../actions/MoviesActions'
import { IAppState } from '..'
import { ApiResponse } from '../../interfaces'

function* FetchMoviesSaga(): any {
	let { search, genres, release, rating } = ((yield select()) as IAppState).Filters.filter
	if (!search.trim()) {
		try {
			//yield put({ type: MoviesActions.TEST, payload: { } })
			yield put({ type: MoviesActions.RESET_MOVIES, payload: {} })
			let { results: movies }: ApiResponse.Discover.Movie = yield call(
				API.DiscoverMovies,
				1,
				genres,
				rating,
				release
			)
			yield put({ type: MoviesActions.ADD_MOVIES, payload: { movies } })
		} catch (error) {
			console.error(error)
		}
	}
}

export function* watchMovies(): any {
	yield takeEvery(MoviesActions.FETCH_MOVIES, FetchMoviesSaga)
}
