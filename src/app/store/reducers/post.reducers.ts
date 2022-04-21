import { createReducer, on } from '@ngrx/store';
import { Post } from 'src/app/models/post';
import { addPostSuccess, getPostsSuccess } from '../actions/post.action';

export interface PostState {
    posts: ReadonlyArray<Post>;
}

const initialState: ReadonlyArray<Post> = [];

export const postReducer = createReducer(
    initialState,
    on(getPostsSuccess, (state, { posts }) => [...posts]),
    on(addPostSuccess, (state, { post }) => [...state, post])
);
