import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getPosts(): Observable<ReadonlyArray<Post>> {
    return this.http.get<ReadonlyArray<Post>>(this.url).pipe(
      catchError((error: HttpErrorResponse) => {
        // console.error(error);
        return throwError(error);
      })
    );
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.url, post).pipe(
      catchError((error: HttpErrorResponse) => {
        // console.error(error);
        return throwError(error);
      })
    );
  }

  deletePost(postId: number) {
    return this.http.delete(`${this.url}/${postId}`).pipe(
      delay(2000),
      catchError((error: HttpErrorResponse) => {
        // console.error(error);
        return throwError(error);
      })
    );
  }

  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.url}/${post.id}`, post).pipe(
      catchError((error: HttpErrorResponse) => {
        // console.error(error);
        return throwError(error);
      })
    );
  }
}
