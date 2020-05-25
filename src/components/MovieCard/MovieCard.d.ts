import { IMovie } from '../../interfaces'

export declare namespace MovieCardProps {
	interface Own
		extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
		movie: IMovie
		background?: string
	}

	interface Store {} // extends IRootState, IMovieCardState

	interface Dispatch {}

	interface State {}

	type Props = Own & Store & Dispatch
}

export {}
