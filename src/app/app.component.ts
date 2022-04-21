import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Post } from './models/post';
import { getPosts, addPost } from './store/actions/post.action';
import { PostState } from './store/reducers/post.reducers';
import { filterPosts } from './store/selector/post.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'fakepost';

  posts$ = this.store.pipe(select(filterPosts('qui est esse')));

  posts: Post[] = [];
  newPost: Post = new Post();

  constructor(private store: Store<PostState>) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(): void {
    this.store.dispatch(getPosts());
  }
}
