import { createReducer, on } from '@ngrx/store';
import { Post } from 'src/app/models/post';
import { addPostSuccess, getPostsSuccess, deletePostSuccess, updatePostSuccess } from '../actions/post.action';

export interface PostState {
    posts: ReadonlyArray<Post>;
}

const initialState: ReadonlyArray<Post> = [];

export const postReducer = createReducer(
    initialState,
    on(getPostsSuccess, (state, { posts }) => [...posts]),
    on(addPostSuccess, (state, { post }) => [...state, post]),
    on(deletePostSuccess, (state, { postId }) =>
      state.filter((post) => post.id !== postId)
    ),
    on(updatePostSuccess, (state, { post }) => {
      const posts = state.map((m) => {
        if (m.id === post.id) {
          return post;
        }
        return m;
      });
      return posts;
    })
);
