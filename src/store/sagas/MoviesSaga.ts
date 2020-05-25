import { API } from './../../api/api'
import { call, put, select, takeEvery } from '@redux-saga/core/effects'
import { MoviesActions } from '../actions/MoviesActions'
import { IAppState } from '..'
import { ApiResponse, IMovie } from '../../interfaces'
import { IAction } from '../interfaces'
import { getYear } from '../../utils'

function* FetchMoviesSaga({ type }: IAction): any {
	let { search, genres, release, rating } = ((yield select()) as IAppState).Filters.filter

	const reset = type === MoviesActions.FETCH_MOVIES

	if (reset) yield put({ type: MoviesActions.RESET_PAGE, payload: {} })

	let { page: cur_page } = ((yield select()) as IAppState).Movies

	let movies: IMovie[] = []
	let page = 0
	let totalPages = 0

	yield put({ type: MoviesActions.SET_LOADING, payload: { loading: true } })

	if (!search.trim()) {
		try {
			let data: ApiResponse.Discover.Movie = yield call(
				API.DiscoverMovies,
				cur_page + 1,
				genres,
				rating,
				release
			)
			movies = data.results
			page = data.page
			totalPages = data.total_pages
		} catch (error) {
			console.error(error)
		}
	} else {
		try {
			let data: ApiResponse.Discover.Movie = yield call(
				API.SearchMovies,
				cur_page + 1,
				search.trim()
			)
			movies = data.results
				.filter(movie => genres.length === 0 || genres.some(g => movie.genre_ids.includes(g)))
				.filter(movie => movie.vote_average >= rating[0] && movie.vote_average <= rating[1])
				.filter(
					movie =>
						getYear(movie.release_date) >= release[0] && getYear(movie.release_date) <= release[1]
				)
				.sort((a, b) => (new Date(a.release_date) < new Date(b.release_date) ? 1 : -1))

			page = data.page
			totalPages = data.total_pages
		} catch (error) {
			console.error(error)
		}
	}
	if (reset) yield put({ type: MoviesActions.SET_MOVIES, payload: { movies, page, totalPages } })
	else yield put({ type: MoviesActions.ADD_MOVIES, payload: { movies, page, totalPages } })
}

function* FetchDetailedMovieSaga({ payload: { id } }: IAction<{ id: number }>): any {
	try {
		yield put({ type: MoviesActions.SET_DETAILED_MOVIE, payload: { movie: undefined } })

		const movie: ApiResponse.Movie.GetDetails = yield call(API.GetMovieDetail, id)

		yield put({ type: MoviesActions.SET_DETAILED_MOVIE, payload: { movie } })
	} catch (e) {
		console.error(e)
	}
}

export function* watchMovies(): any {
	yield takeEvery(MoviesActions.FETCH_MOVIES, FetchMoviesSaga)
	yield takeEvery(MoviesActions.LOAD_MORE_MOVIES, FetchMoviesSaga)
	yield takeEvery(MoviesActions.OPEN_DETAILED, FetchDetailedMovieSaga)
}
