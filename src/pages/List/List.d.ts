import { IFilter, IConfiguration } from '../../interfaces'
import { IMoviesState } from '../../store'

export declare namespace ListProps {
	interface Own {
		className?: string
	}

	interface Store extends IMoviesState {
		filter: IFilter
		configuration?: IConfiguration
	} // extends IRootState, IListState

	interface Dispatch {
		fetchMovies: () => void
	}

	interface State {}

	type Props = Own & Store & Dispatch
}

export {}
