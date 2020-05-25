import { IFilter, IMovie, IDetailedMovie } from './../../interfaces'
import { IConfiguration, IGenre } from '../../interfaces'

export interface IAppState {
	root: IRootState
	Movies: IMoviesState
	Filters: IFilterState
}
export interface IRootState {
	configuration?: IConfiguration
}
export interface IFilterState {
	genres?: IGenre[]
	filter: IFilter
}
export interface IMoviesState {
	movies: IMovie[]
	detailed: {
		loading: boolean
		movie?: IDetailedMovie
		open: boolean
	}
	page: number
	totalPages: number
}
