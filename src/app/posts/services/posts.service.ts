import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Post } from '../models';

@Injectable({
  providedIn: 'root',
})
/**
 * Posts service to request data from backend server
 */
export class PostsService {
  constructor(private http: HttpClient) {}

  /**
   * Returns the lists of posts created into the backend system
   * @returns {Observable<Post[]>} array of posts
   */
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('/json-server/posts').pipe(
      tap((data) => console.log('[posts-service.ts] fetched posts: ', data)),
      catchError(this.handleError([]))
    );
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`/json-server/posts}/${id}`).pipe(
      tap((data) =>
        console.log(`[posts-service.ts] fetched post id=${id}`, data)
      ),
      catchError(this.handleError<Post>())
    );
  }

  /**
   * Handle errors from http requests
   * @param result optional value to return as the observable result
   * @returns observable with result data or empty
   */
  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      // TODO: display popup with error
      console.error(error);
      return of(result as T);
    };
  }
}
