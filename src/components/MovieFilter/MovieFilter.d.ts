import { IFilterState } from '../../store'

export declare namespace MovieFilterProps {
	interface Own {
		className?: string
	}

	interface Store extends IFilterState {}

	interface Dispatch {}

	interface State {}

	type Props = Own & Store & Dispatch
}

export {}
