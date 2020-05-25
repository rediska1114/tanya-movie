import React, { Suspense, lazy } from 'react'
import styles from './App.module.scss'
import classNames from 'classnames'
import { AppProps } from './App.d'
import { History, pure } from '../utils'
import { Router, Switch, Route } from 'react-router'
import { routes } from '../enums'
import { connect, MapDispatchToProps } from 'react-redux'
import { IAppState, TDispatch } from '../store'

const List = lazy(() => import('../pages/List'))
const Main = lazy(() => import('../pages/Main'))

const App: React.FC<AppProps.Props> = props => {
	const { className } = props

	return (
		<div className={classNames(styles.App, className)}>
			<Suspense fallback={<div className={styles.Loading}>Loading...</div>}>
				<Router history={History}>
					<Switch>
						<Route exact path={routes.main} component={Main} />
						<Route exact path={routes.list} component={List} />
					</Switch>
				</Router>
			</Suspense>
		</div>
	)
}

App.defaultProps = {}

const mapStateToProps = (state: IAppState): AppProps.Store => state.root

const mapDispatchToProps: MapDispatchToProps<AppProps.Dispatch, AppProps.Own> = (
	dispatch: TDispatch
) => ({
	// setTest: (test: test) =>
	// 	dispatch({ type: AppActions.TEST, payload: { test } })
})

export default connect(mapStateToProps, mapDispatchToProps)(pure(App))
