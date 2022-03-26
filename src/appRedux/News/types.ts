import {Post, PostType} from "types";

export interface News {
    loadingData:boolean;
    news:Post[];
    activeTab: PostType.NEWS | PostType.BOOKMARKS;
    page: number;
    rowsPerPage: number;
}