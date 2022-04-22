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
export const deletePost = createAction(
  '[Post] Delete post',
  (postId: number) => ({ postId })
);
export const deletePostSuccess = createAction(
  '[Post] Delete post success',
  (postId: number) => ({ postId })
);
export const updatePost = createAction(
  '[Post] Update post',
  (post: Post) => ({ post })
);
export const updatePostSuccess = createAction(
  '[Post] Update post success',
  (post: Post) => ({ post })
);
