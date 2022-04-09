import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Post } from './models';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts$!: Observable<Post[]>;
  private searchTerms = new BehaviorSubject<string>('');
  displayedColumns: string[] = ['id', 'title', 'tags'];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.posts$ = this.searchTerms.pipe(
      // debounceTime(100),
      distinctUntilChanged(),
      switchMap((term: string) => this.postsService.searchPosts(+term))
    );
  }

  /**
   * Method executed every time the input changes
   * @param term input value with search term
   */
  search(term: string): void {
    this.searchTerms.next(term);
  }
}
