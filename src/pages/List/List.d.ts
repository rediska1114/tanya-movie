export declare namespace ListProps {
	interface Own {
		className?: string
	}

	interface Store {} // extends IRootState, IListState

	interface Dispatch {}

	interface State {}

	type Props = Own & Store & Dispatch
}

export {}
