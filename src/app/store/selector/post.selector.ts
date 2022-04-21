import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Post } from 'src/app/models/post';
import { PostState } from '../reducers/post.reducers';

export const postSelector = createSelector(
    (state: PostState) => state.posts,
    (posts: ReadonlyArray<Post>) => posts
);

export const filterPosts = (title: string) =>
    createSelector(postSelector, (posts) => {
        return posts.filter((post: Post) => post.title != title);
    });