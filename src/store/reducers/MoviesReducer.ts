import { IMoviesState, IAction } from '../interfaces'
import { MoviesActions } from '../actions'

export const initialMovies: IMoviesState = {}

const MoviesReducer = (state: IMoviesState = initialMovies, action: IAction): IMoviesState => {
	switch (action.type) {
		default:
			return state
	}
}
export default MoviesReducer
