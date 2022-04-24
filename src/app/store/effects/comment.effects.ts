import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, concatMap, exhaustMap, map, tap, mergeMap } from 'rxjs/operators';
import { CommentsService } from 'src/app/services/comments.service';
import {
  getComments,
  getCommentsSuccess,
  getCommentById,
  getCommentByIdSuccess,
  addComment,
  addCommentSuccess,
  deleteComment,
  deleteCommentSuccess,
  updateComment,
  updateCommentSuccess
} from '../actions/comment.action';

@Injectable()
export class CommentEffects {
  loadComment$ = createEffect(() =>
    this.action$.pipe(
      ofType(getComments),
      exhaustMap(() =>
        this.commentsService.getComments().pipe(
          map((comments) => getCommentsSuccess(comments)),
          catchError(() => EMPTY)
        )
      )
    )
  );
  loadCommentById$ = createEffect(() =>
    this.action$.pipe(
      ofType(getCommentById),
      mergeMap(({ commentId }) =>
        this.commentsService.getCommentsById(commentId).pipe(
          map((comments) => getCommentByIdSuccess(comments)),
          catchError(() => EMPTY)
        )
      )
    )
  );
  addComment$ = createEffect(() =>
    this.action$.pipe(
      ofType(addComment),
      tap((comment) => console.log(comment)),
      concatMap(({ comment }) =>
        this.commentsService.addComments(comment).pipe(
          map((newComment) => addCommentSuccess(newComment)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  deleteComment$ = createEffect(() =>
    this.action$.pipe(
      ofType(deleteComment),
      mergeMap(({ commentId }) =>
        this.commentsService.deleteComments(commentId).pipe(
          map(() => deleteCommentSuccess(commentId)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  updateComment$ = createEffect(() =>
    this.action$.pipe(
      ofType(updateComment),
      concatMap(({ comment }) =>
        this.commentsService.updateComments(comment).pipe(
          map(() => updateCommentSuccess(comment)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private action$: Actions, private commentsService: CommentsService) { }
}