import { IDetailedMovie } from '../../interfaces'

export declare namespace MovieSideProps {
	interface Own
		extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
		onClose?(): void

		movie?: IDetailedMovie
		loading?: boolean
		poster?: string | null
	}

	interface Store {} // extends IRootState, IMovieSideState

	interface Dispatch {}

	interface State {}

	type Props = Own & Store & Dispatch
}

export {}
