import { applyMiddleware, compose, createStore, Store, combineReducers, Dispatch } from 'redux'
import { IAction, IAppState } from './interfaces'
import { MoviesReducer, RootReducer, FilterReducer } from './reducers'
import rootSaga from './sagas'
import createSagaMiddleware from '@redux-saga/core'

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const w: any = window as any

export type TDispatch = Dispatch<IAction>

const store: Store<IAppState, IAction> = createStore<IAppState, IAction, any, any>(
	combineReducers<IAppState>({
		root: RootReducer,
		Movies: MoviesReducer,
		Filters: FilterReducer
	}),
	compose(
		applyMiddleware(...middleware),
		w['__REDUX_DEVTOOLS_EXTENSION__'] ? w['__REDUX_DEVTOOLS_EXTENSION__']() : (f: any) => f
	)
)

sagaMiddleware.run(rootSaga)

export default store

export * from './actions'
export * from './interfaces'
