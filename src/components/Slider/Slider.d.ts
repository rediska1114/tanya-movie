import { SliderTypeMap } from '@material-ui/core'

export declare namespace SliderProps {
	interface Own {
		className?: string
		min?: number
		max?: number
		value?: number[]
		defaultValue?: number[]
	}

	interface Store {} // extends IRootState, ISliderState

	interface Dispatch {}

	interface State {}

	type Props = Own & Store & Dispatch
}

export {}
