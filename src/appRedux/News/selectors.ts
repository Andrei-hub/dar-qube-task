import {createSelector, Selector} from "reselect";
import {RootState} from "../types";
import {Post} from "../../types";

const searchBy = (news: Post[], search: string) => {
    const regex = new RegExp(search, "i");
    return news.filter(
        ({ headline, summary }) => regex.test(headline) || regex.test(summary),
    );
};

export const newsSelector: Selector<RootState, RootState['News']> = (state) => state.News;
export const loadingNewsSelector = createSelector(newsSelector, (news) => news.loadingData);
export const searchSelector = createSelector(newsSelector, (news) => news.searchParams);
export const dataSelector = createSelector(newsSelector,searchSelector, (news,params) => searchBy(news.news,params));
export const latestNewsSelector = createSelector(newsSelector, ({news}) => news[news.length - 1] );
export const bookmarksSelector = createSelector(newsSelector, (news) => news.bookMarks);
export const selectedNewsSelector = createSelector(
    dataSelector,
    bookmarksSelector,
    searchSelector,
    (news, bookmarks,params) => searchBy(news.filter(({ id }) => bookmarks.includes(id)),params) );
export const rowsPerPageSelector = createSelector(newsSelector, (news) => news.rowsPerPage);
// export const latestNewsSelector = createSelector(dataSelector, (data) => data.sort((a, b) => b.datetime - a.datetime)[0] );
