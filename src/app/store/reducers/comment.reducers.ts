import { createReducer, on } from '@ngrx/store';
import { Comments } from 'src/app/models/comments';
import { addCommentSuccess, getCommentsSuccess, getCommentByIdSuccess, deleteCommentSuccess, updateCommentSuccess } from '../actions/comment.action';

export interface CommentState {
    comments: ReadonlyArray<Comments>;
}

const initialState: ReadonlyArray<Comments> = [];

export const commentReducer = createReducer(
    initialState,
    on(getCommentsSuccess, (state, { comments }) => [...comments]),
    on(getCommentByIdSuccess, (state, { comments }) => [...comments]),
    on(addCommentSuccess, (state, { comment }) => [...state, comment]),
    on(deleteCommentSuccess, (state, { commentId }) =>
      state.filter((comment) => comment.id !== commentId)
    ),
    on(updateCommentSuccess, (state, { comment }) => {
      const comments = state.map((m) => {
        if (m.id === comment.id) {
          return comment;
        }
        return m;
      });
      return comments;
    })
);
