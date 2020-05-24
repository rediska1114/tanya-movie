import React from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames'
import { ButtonProps } from './Button.d'

const Button: React.FC<ButtonProps.Props> = props => {
	const { className, children, ...othersProps } = props

	return (
		<div className={classNames(styles.Button, className)} {...othersProps}>
			{children}
		</div>
	)
}

Button.defaultProps = {}

// const mapStateToProps = (state: IAppState): ButtonProps.Store => ({
// 	...state.root,
// 	...state.Button
// });

// const mapDispatchToProps: MapDispatchToProps<
// 	ButtonProps.Dispatch,
// 	ButtonProps.Own
// > = (dispatch: TDispatch) => ({
// 	setTest: (test: test) =>
// 		dispatch({ type: ButtonActions.TEST, payload: { test } })
// });

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(Button);

export default Button
