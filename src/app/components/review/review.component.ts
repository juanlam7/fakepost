import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Comments } from '../../models/comments';
import { getCommentById, deleteComment, updateComment } from '../../store/actions/comment.action';
import { CommentState } from '../../store/reducers/comment.reducers';
import { allComments } from '../../store/selector/comment.selector';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  comments$ = this.store.pipe(select(allComments()));

  @Input() receivedPostId: number = 0;

  constructor(private store: Store<CommentState>) { }

  ngOnInit(): void {
    this.getCommentOfPost(this.receivedPostId);
  }

  async getCommentOfPost(postId: number) {
    this.store.dispatch(getCommentById(postId));
  }
}
