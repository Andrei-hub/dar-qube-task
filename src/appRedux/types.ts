import { DefaultRootState } from 'react-redux';
import { News } from './News/types';

export type ValueOf<T> = T[keyof T];

export type Action<R, T = ValueOf<R>> = T extends (payload: any) => { type: infer K; payload: infer M }
    ? { type: K; payload: M }
    : never;

export interface RootState extends DefaultRootState {
    News: News;
}