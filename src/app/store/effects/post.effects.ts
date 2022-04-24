import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, concatMap, exhaustMap, map, tap, mergeMap } from 'rxjs/operators';
import { PostService } from '../../../app/services/post.service';
import {
  getPosts,
  getPostsSuccess,
  addPost,
  addPostSuccess,
  deletePost,
  deletePostSuccess,
  updatePost,
  updatePostSuccess
} from '../actions/post.action';

@Injectable()
export class PostEffects {
  loadPost$ = createEffect(() =>
    this.action$.pipe(
      ofType(getPosts),
      exhaustMap(() =>
        this.postService.getPosts().pipe(
          map((posts) => getPostsSuccess(posts)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addPost$ = createEffect(() =>
    this.action$.pipe(
      ofType(addPost),
      tap((post) => console.log(post)),
      concatMap(({ post }) =>
        this.postService.addPost(post).pipe(
          map((newPost) => addPostSuccess(newPost)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  deletePost$ = createEffect(() =>
    this.action$.pipe(
      ofType(deletePost),
      mergeMap(({ postId }) =>
        this.postService.deletePost(postId).pipe(
          map(() => deletePostSuccess(postId)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  updatePost$ = createEffect(() =>
    this.action$.pipe(
      ofType(updatePost),
      concatMap(({ post }) =>
        this.postService.updatePost(post).pipe(
          map(() => updatePostSuccess(post)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private action$: Actions, private postService: PostService) { }
}