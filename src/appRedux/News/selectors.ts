import {createSelector, Selector} from "reselect";
import {RootState} from "../types";

export const newsSelector: Selector<RootState, RootState['News']> = (state) => state.News;
export const loadingNewsSelector = createSelector(newsSelector, (news) => news.loadingData);
export const activeTabSelector = createSelector(newsSelector, (news) => news.activeTab);
export const pageSelector = createSelector(newsSelector, (news) => news.rowsPerPage);
export const rowsPerPageSelector = createSelector(newsSelector, (news) => news.rowsPerPage);
