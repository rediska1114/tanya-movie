import { IMoviesState, IAction } from '../interfaces'
import { MoviesActions } from '../actions'

export const initialMovies: IMoviesState = {
	movies: []
}

const MoviesReducer = (state: IMoviesState = initialMovies, action: IAction): IMoviesState => {
	switch (action.type) {
		case MoviesActions.ADD_MOVIES: {
			return {
				...state,
				movies: [...state.movies, ...action.payload.movies]
			}
		}
		case MoviesActions.RESET_MOVIES: {
			return {
				...state,
				movies: []
			}
		}
		default:
			return state
	}
}
export default MoviesReducer
