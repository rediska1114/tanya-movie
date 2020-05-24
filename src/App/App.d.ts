export declare namespace AppProps {
	interface Own {
		className?: string
	}

	interface Store {} // extends IRootState, IAppState

	interface Dispatch {}

	interface State {}

	type Props = Own & Store & Dispatch
}

export {}
