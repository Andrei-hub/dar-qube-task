import actionTypes from "./actionTypes";
import {News} from "./types";

export const setActiveTab = (payload: News) => ({
    type: actionTypes.SET_ACTIVE_TAB as const,
    payload,
});