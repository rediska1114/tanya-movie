import React from 'react'
import styles from './App.module.scss'
import classNames from 'classnames'
import { AppProps } from './App.d'

const App: React.FC<AppProps.Props> = props => {
	const { className } = props

	return <div className={classNames(styles.App, className)}>Hello, it's App</div>
}

App.defaultProps = {}

// const mapStateToProps = (state: IAppState): AppProps.Store => ({
// 	...state.root,
// 	...state.App
// });

// const mapDispatchToProps: MapDispatchToProps<
// 	AppProps.Dispatch,
// 	App.Own
// > = (dispatch: TDispatch) => ({
// 	setTest: (test: test) =>
// 		dispatch({ type: AppActions.TEST, payload: { test } })
// });

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(App);

export default App
