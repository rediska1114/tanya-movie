import { call, put, select, takeEvery } from '@redux-saga/core/effects'
import { MoviesActions } from '../actions/MoviesActions'
function* MoviesSaga(): any {
	try {
		// let name = ((yield select()) as IAppState).Movies
		//yield put({ type: MoviesActions.TEST, payload: { } })
		// let Movies = yield call(API.TEST, name)
	} catch (error) {
		console.error(error)
	}
}

export function* watchMovies(): any {
	yield takeEvery(MoviesActions.TEST, MoviesSaga)
}
