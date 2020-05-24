import React from 'react'
import styles from './Chip.module.scss'
import classNames from 'classnames'
import { ChipProps } from './Chip.d'

const Chip: React.FC<ChipProps.Props> = props => {
	const { className, active, text, ...otherProps } = props

	return (
		<div
			className={classNames(styles.Chip, className, {
				[styles.Active]: !!active
			})}
			{...otherProps}
		>
			{text}
		</div>
	)
}

Chip.defaultProps = {}

// const mapStateToProps = (state: IAppState): ChipProps.Store => ({
// 	...state.root,
// 	...state.Chip
// });

// const mapDispatchToProps: MapDispatchToProps<
// 	ChipProps.Dispatch,
// 	ChipProps.Own
// > = (dispatch: TDispatch) => ({
// 	setTest: (test: test) =>
// 		dispatch({ type: ChipActions.TEST, payload: { test } })
// });

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(Chip);

export default Chip
