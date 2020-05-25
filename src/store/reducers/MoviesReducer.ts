import { IMoviesState, IAction } from '../interfaces'
import { MoviesActions } from '../actions'
import { removeDuplicates } from '../Utils'

export const initialMovies: IMoviesState = {
	movies: [],
	detailed: {
		loading: false,
		movie: undefined,
		open: false
	},
	page: 0,
	totalPages: 0
}

const MoviesReducer = (state: IMoviesState = initialMovies, action: IAction): IMoviesState => {
	switch (action.type) {
		case MoviesActions.ADD_MOVIES: {
			const { movies, page, totalPages } = action.payload
			return {
				...state,
				movies: removeDuplicates([...state.movies, ...movies]),
				page,
				totalPages
			}
		}
		case MoviesActions.RESET_MOVIES: {
			return {
				...state,
				movies: [],
				page: 0,
				totalPages: 0
			}
		}

		case MoviesActions.SET_DETAILED_LOADING: {
			return {
				...state,
				detailed: {
					...state.detailed,
					loading: !!action.payload.loading
				}
			}
		}
		case MoviesActions.SET_DETAILED_MOVIE: {
			const { movie } = action.payload
			return {
				...state,
				detailed: {
					...state.detailed,
					loading: !movie,
					movie: movie,
					open: true
				}
			}
		}
		case MoviesActions.CLOSE_DETAILED: {
			return {
				...state,
				detailed: {
					...state.detailed,
					open: false
				}
			}
		}
		default:
			return state
	}
}
export default MoviesReducer
