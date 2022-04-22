import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from '../../models/post';
import { deletePost, updatePost } from '../../store/actions/post.action';
import { PostState } from '../../store/reducers/post.reducers';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  
  @Input() receivedPost: Post = new Post();

  @ViewChild('titleValue', {static: false}) titleValue!: ElementRef<HTMLElement>;
  @ViewChild('bodyValue', {static: false}) bodyValue!: ElementRef<HTMLElement>;

  updatedPost: Post = new Post();

  constructor(private store: Store<PostState>) { }

  ngOnInit(): void {

  }

  detetePost(id: number) {
    this.store.dispatch(deletePost(id));
  }

  updatePosts(id: number, userId: number) {
    this.updatedPost.title = this.titleValue.nativeElement.innerHTML;
    this.updatedPost.body = this.bodyValue.nativeElement.innerHTML;
    this.updatedPost.id = id;
    this.updatedPost.userId = userId;
    this.store.dispatch(updatePost(this.updatedPost));
  }
}
