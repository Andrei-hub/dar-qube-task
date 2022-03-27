import actionTypes from './actionTypes';
import * as actions from '../News/actionCreators';
import { Action } from '../types';
import { News } from './types';

export const initialState: News = {
	loadingData: true,
	news: [],
	bookMarks: [],
	searchParams: '',
	page: 0,
	rowsPerPage: 6,
};

const reducer = (state: News = initialState, action: Action<typeof actions>): News => {
	switch (action.type) {
		case actionTypes.SET_LOADING_DATA:
			return {
				...state,
				loadingData: action.payload,
			};
		case actionTypes.SET_NEWS:
			return {
				...state,
				news: action.payload,
			};
		case actionTypes.SET_BOOK_MARK:
			const { payload } = action;
			return {
				...state,
				bookMarks: state.bookMarks.includes(payload)
					? state.bookMarks.filter((i: number) => i !== payload)
					: [...state.bookMarks, payload],
			};
		case actionTypes.SET_SEARCH_PARAMS:
			return {
				...state,
				searchParams: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
