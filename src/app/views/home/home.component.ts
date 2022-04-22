import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from '../../models/post';
import { getPosts, addPost } from '../../store/actions/post.action';
import { PostState } from '../../store/reducers/post.reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Post[] = [];
  newPost: Post = new Post();

  constructor(private store: Store<PostState>) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(): void {
    this.store.dispatch(getPosts());
  }

  addNewPosts(): void {
    this.store.dispatch(addPost(this.newPost));
    this.newPost = new Post();
  }

}
