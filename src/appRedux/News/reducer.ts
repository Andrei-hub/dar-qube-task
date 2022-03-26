import actionTypes from "./actionTypes";
import * as actions from '../News/actionCreators';
import {Action} from "../types";
import {News} from "./types";
import {PostType} from "../../types";

export const initialState: News = {
    loadingData: true,
    news:[],
    activeTab: PostType.NEWS,
    page: 0,
    rowsPerPage: 6,
}

const reducer = (state: News = initialState, action: Action<typeof actions>): News => {
    switch (action.type) {
        case actionTypes.SET_LOADING_DATA:
            return {
                ...state,
                loadingData:action.payload,
            };
        case actionTypes.SET_NEWS:
            return {
                ...state,
                news:action.payload,
            };
        case actionTypes.SET_ACTIVE_TAB:
            return {
                ...state,
                activeTab:action.payload,
            };
        default:
            return state;
    }
};

export default reducer;