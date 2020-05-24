import React, { useState, useEffect } from 'react'
import styles from './Main.module.scss'
import classNames from 'classnames'
import { MainProps } from './Main.d'
import { MovieFilter } from '../../components'
import { ReactComponent as Logo } from '../../assets/images/logo_big.svg'

const Main: React.FC<MainProps.Props> = props => {
	const { className } = props

	return (
		<div className={classNames(styles.Main, className)}>
			<Logo className={styles.Logo} />
			<MovieFilter />
		</div>
	)
}

Main.defaultProps = {}

// const mapStateToProps = (state: IAppState): MainProps.Store => ({
// 	...state.root,
// 	...state.Main
// });

// const mapDispatchToProps: MapDispatchToProps<
// 	MainProps.Dispatch,
// 	Main.Own
// > = (dispatch: TDispatch) => ({
// 	setTest: (test: test) =>
// 		dispatch({ type: MainActions.TEST, payload: { test } })
// });

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(Main);

export default Main
