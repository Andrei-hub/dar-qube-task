export type Path = `https://${string}`;

export interface Post {
    category: string;
    datetime: number;
    headline: string;
    id: number;
    image: Path;
    related: string;
    source: Path;
    summary: string;
    url: Path;
}
export enum PostType {
    NEWS = 'NEWS',
    BOOKMARKS = 'BOOKMARKS',
}