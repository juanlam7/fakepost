import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from '../../models/post';
import { deletePost, updatePost } from '../../store/actions/post.action';
import { PostState } from '../../store/reducers/post.reducers';
import { CopyPost } from '../list/list.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Output() postVisible: EventEmitter<number> = new EventEmitter();
  @Input() receivedPost!: CopyPost;

  @ViewChild('titleValue', { static: false }) titleValue!: ElementRef<HTMLElement>;
  @ViewChild('bodyValue', { static: false }) bodyValue!: ElementRef<HTMLElement>;

  updatedPost: Post = new Post();
  showDeleteAndEditBtn: boolean = true;

  constructor(private store: Store<PostState>) { }

  ngOnInit(): void {
  }

  detetePost(id: number) {
    this.store.dispatch(deletePost(id));
  }

  updatePosts(id: number, userId: number): void {
    this.updatedPost.title = this.titleValue.nativeElement.innerHTML;
    this.updatedPost.body = this.bodyValue.nativeElement.innerHTML;
    this.updatedPost.id = id;
    this.updatedPost.userId = userId;
    this.store.dispatch(updatePost(this.updatedPost));
  }

  openComments(postId: number) {
    this.postVisible.emit(postId);
    this.showDeleteAndEditBtn = !this.showDeleteAndEditBtn
  }
}
