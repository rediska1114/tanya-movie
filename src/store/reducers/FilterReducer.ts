import { IFilterState, IAction } from '../interfaces/'
import { FilterActions } from '../actions'
const CURRENT_YEAR = new Date().getFullYear()

export const initialFilter: IFilterState = {
	genres: undefined,
	filter: {
		search: '',
		genres: [],
		rating: [0, 10],
		release: [1917, CURRENT_YEAR]
	}
}

const FilterReducer = (state: IFilterState = initialFilter, action: IAction): IFilterState => {
	switch (action.type) {
		case FilterActions.SET_VALUE: {
			const { name, value } = action.payload
			return {
				...state,
				filter: {
					...state.filter,
					[name]: value
				}
			}
		}
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
