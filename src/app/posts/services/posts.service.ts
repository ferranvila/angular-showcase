import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap, toArray } from 'rxjs/operators';
import { NotificationsService } from 'src/app/services/notifications.service';
import { Post } from '../models';

@Injectable({
  providedIn: 'root',
})
/**
 * Posts service to request data from backend server
 */
export class PostsService {
  constructor(
    private http: HttpClient,
    private notificationsService: NotificationsService
  ) {}

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

  /**
   * Returns one post into an array
   * @param id post identifier
   * @returns {Observable<Post[]>} array of posts
   */
  getPost(id: number): Observable<Post[]> {
    return this.http.get<Post>(`/json-server/posts/${id}`).pipe(
      tap((data) =>
        console.log(`[posts-service.ts] fetched post id=${id}`, data)
      ),
      toArray(),
      catchError(this.handleError([]))
    );
  }

  /**
   * Search a post by id or return all posts if term is empty
   * @param term search
   * @returns {Observable<Post[]>} array of posts
   */
  searchPosts(term: number): Observable<Post[]> {
    return term ? this.getPost(term) : this.getPosts();
  }

  /**
   * Handle errors from http requests
   * @param result optional value to return as the observable result
   * @returns observable with result data or empty
   */
  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      this.notificationsService.showNotification(error.message);
      return of(result as T);
    };
  }
}
