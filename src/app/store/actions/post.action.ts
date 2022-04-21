import { createAction } from '@ngrx/store';
import { Post } from '../../models/post';

export const getPosts = createAction('[Post] Get posts');

export const getPostsSuccess = createAction(
  '[Post] Get post success',
  (posts: ReadonlyArray<Post>) => ({ posts })
);
export const addPost = createAction(
  '[Post] Add post',
  (post: Post) => ({ post })
);
export const addPostSuccess = createAction(
  '[Post] Add post success',
  (post: Post) => ({ post })
);
