import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EmptyError } from 'rxjs';
import { catchError, concatMap, exhaustMap, map, tap } from 'rxjs/operators';
import { PostService } from 'src/app/services/post.service';
import {
  getPosts,
  getPostsSuccess,
  addPost,
  addPostSuccess,
} from '../actions/post.action';

@Injectable()
export class PostEffects {
  loadPost$ = createEffect(() =>
    this.action$.pipe(
      ofType(getPosts),
      exhaustMap(() =>
        this.postService.getPosts().pipe(
          map((posts) => getPostsSuccess(posts)),
          // catchError(() => EmptyError)
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
          // catchError(() => EmptyError)
        )
      )
    )
  );

  constructor(private action$: Actions, private postService: PostService) { }
}