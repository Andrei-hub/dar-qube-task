import actionTypes from "./actionTypes";
import * as actions from '../News/actionCreators';
import {Action} from "../types";
import {News} from "./types";

export const initialState: News = {
    loadingData:true,
    tabName: 'string',
    page: 0,
    rowsPerPage: 6,
}

const reducer = (state: News = initialState, action: Action<typeof actions>): News => {
    switch (action.type) {
        case actionTypes.SET_ACTIVE_TAB:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;