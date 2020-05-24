import { IRootState, IAction } from '../interfaces'
import { RootActions } from '../actions'

const initialState: IRootState = {
	configuration: undefined
}

const RootReducer = (state: IRootState = initialState, action: IAction): IRootState => {
	switch (action.type) {
		case RootActions.CONFIGURE: {
			return {
				...state,
				configuration: action.payload
			}
		}

		default:
			return state
	}
}

export default RootReducer
