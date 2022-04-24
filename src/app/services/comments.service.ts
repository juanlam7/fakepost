import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

import { Comments } from '../models/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private url = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private http: HttpClient) { }

  getComments(): Observable<ReadonlyArray<Comments>> {
    return this.http.get<ReadonlyArray<Comments>>(this.url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  getCommentsById(id: number): Observable<ReadonlyArray<Comments>> {
    return this.http.get<ReadonlyArray<Comments>>(`${this.url}?postId=${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  addComments(comments: Comments): Observable<Comments> {
    return this.http.post<Comments>(this.url, comments).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  deleteComments(commentsId: number) {
    return this.http.delete(`${this.url}/${commentsId}`).pipe(
      delay(2000),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  updateComments(comments: Comments): Observable<Comments> {
    return this.http.put<Comments>(`${this.url}/${comments.id}`, comments).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}
