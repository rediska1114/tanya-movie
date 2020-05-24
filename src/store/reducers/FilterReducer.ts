import { IFilterState, IAction } from '../interfaces/'
import { FilterActions } from '../actions'

export const initialFilter: IFilterState = {
	genres: undefined
}

const FilterReducer = (state: IFilterState = initialFilter, action: IAction): IFilterState => {
	switch (action.type) {
		case FilterActions.SET_GENRES: {
			return {
				...state,
				genres: action.payload.genres
			}
		}

		default:
			return state
	}
}

//REMEMBE ADD TO index.ts
export default FilterReducer
