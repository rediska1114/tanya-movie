export declare namespace MainProps {
	interface Own {
		className?: string
	}

	interface Store {} // extends IRootState, IMainState

	interface Dispatch {}

	interface State {}

	type Props = Own & Store & Dispatch
}

export {}
