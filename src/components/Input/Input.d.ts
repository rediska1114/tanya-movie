export declare namespace InputProps {
	interface Own
		extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
		onChange?(value: string): void
	}

	type Props = Own
}

export {}
