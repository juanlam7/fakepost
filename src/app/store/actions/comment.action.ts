import { createAction } from '@ngrx/store';
import { Comments } from '../../models/comments';

export const getComments = createAction('[Comment] Get comments');

export const getCommentsSuccess = createAction(
  '[Comment] Get comment success',
  (comments: ReadonlyArray<Comments>) => ({ comments })
);
export const getCommentById = createAction(
  '[Comment] Get comment by id',
  (commentId: number) => ({ commentId })
);
export const getCommentByIdSuccess = createAction(
  '[Comment] Get comment by id success',
  (comments: ReadonlyArray<Comments>) => ({ comments })
);
export const addComment = createAction(
  '[Comment] Add comment',
  (comment: Comments) => ({ comment })
);
export const addCommentSuccess = createAction(
  '[Comment] Add comment success',
  (comment: Comments) => ({ comment })
);
export const deleteComment = createAction(
  '[Comment] Delete comment',
  (commentId: number) => ({ commentId })
);
export const deleteCommentSuccess = createAction(
  '[Comment] Delete comment success',
  (commentId: number) => ({ commentId })
);
export const updateComment = createAction(
  '[Comment] Update comment',
  (comment: Comments) => ({ comment })
);
export const updateCommentSuccess = createAction(
  '[Comment] Update comment success',
  (comment: Comments) => ({ comment })
);
