import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Comments } from 'src/app/models/comments';
import { CommentState } from '../reducers/comment.reducers';

export const CommentSelector = createSelector(
    (state: CommentState) => state.comments,
    (comments: ReadonlyArray<Comments>) => comments
);

export const allComments = () =>
    createSelector(CommentSelector, (comments) => {
        return comments;
    });