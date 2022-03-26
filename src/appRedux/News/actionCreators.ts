import { AnyAction } from 'redux';
import {ThunkAction} from "redux-thunk";
import actionTypes from "./actionTypes";
import {RootState} from "../types";
import {News} from "./types";
import {getNews} from "./services";


export const setLoadingData = (payload: News['loadingData']) => ({
    type: actionTypes.SET_LOADING_DATA as const,
    payload,
});
export const setNews = (payload: News['news']) => ({
    type: actionTypes.SET_NEWS as const,
    payload,
});
export const setActiveTab = (payload: News['activeTab']) => ({
    type: actionTypes.SET_ACTIVE_TAB as const,
    payload,
});

export const thunkSetNews = (): ThunkAction<void, RootState, unknown, AnyAction> =>
    async (dispatch) => {
        dispatch(setLoadingData(true));
        const data =  await getNews();
        console.log(data)
        if (data) {
            dispatch(setNews(data));
            dispatch(setLoadingData(false));
        }
    };