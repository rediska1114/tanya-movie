import { all } from '@redux-saga/core/effects'
import { watchMovies } from './MoviesSaga'
import { ConfigureSaga } from './ConfigureSaga'

export default function* rootSaga() {
	yield all([watchMovies(), ConfigureSaga()])
}
