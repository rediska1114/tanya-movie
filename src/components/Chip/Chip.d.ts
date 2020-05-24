export declare namespace ChipProps {
	interface Own
		extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
		active?: boolean
		text: string
	}

	interface Store {} // extends IRootState, IChipState

	interface Dispatch {}

	interface State {}

	type Props = Own & Store & Dispatch
}

export {}
