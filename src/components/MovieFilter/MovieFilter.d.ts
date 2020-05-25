import { IFilterState } from '../../store'
import { IFilter } from '../../interfaces'

export declare namespace MovieFilterProps {
	interface Own {
		className?: string
		onSubmit?(): void
		type?: 'block' | 'header'
	}

	interface Store extends IFilterState {}

	interface Dispatch {
		setValue: (name: keyof IFilter, value: string | number[]) => void
	}

	interface State {}

	type Props = Own & Store & Dispatch
}

export {}
