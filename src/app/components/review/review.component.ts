import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Comments } from '../../models/comments';
import { getCommentById, deleteComment, updateComment, addComment } from '../../store/actions/comment.action';
import { CommentState } from '../../store/reducers/comment.reducers';
import { allComments } from '../../store/selector/comment.selector';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  comments$ = this.store.pipe(select(allComments()));

  @ViewChild('nameValue', { static: false }) nameValue!: ElementRef<HTMLElement>;
  @ViewChild('emailValue', { static: false }) emailValue!: ElementRef<HTMLElement>;
  @ViewChild('bodValue', { static: false }) bodValue!: ElementRef<HTMLElement>;

  @Input() receivedPostId: number = 0;

  showAddNewComment: boolean = false;
  updatedComment: Comments = new Comments();
  newComment: Comments = new Comments();

  constructor(private store: Store<CommentState>) { }

  ngOnInit(): void {
    this.getCommentOfPost(this.receivedPostId);
  }

  async getCommentOfPost(postId: number) {
    this.store.dispatch(getCommentById(postId));
  }

  deteteComment(id: number) {
    this.store.dispatch(deleteComment(id));
  }

  updateComment(id: number, postId: number): void {
    this.updatedComment.name = this.nameValue.nativeElement.innerHTML;
    this.updatedComment.email = this.emailValue.nativeElement.innerHTML;
    this.updatedComment.body = this.bodValue.nativeElement.innerHTML;
    this.updatedComment.id = id;
    this.updatedComment.postId = postId;
    this.store.dispatch(updateComment(this.updatedComment));
  }

  addNewComment() {
    this.newComment.postId = this.receivedPostId;
    this.store.dispatch(addComment(this.newComment));
  }
}
