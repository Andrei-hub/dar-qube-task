import {Post} from "types";

export interface News {
    loadingData:boolean;
    news:Post[];
    bookMarks:number[];
    searchParams: string;
    page: number;
    rowsPerPage: number;
}