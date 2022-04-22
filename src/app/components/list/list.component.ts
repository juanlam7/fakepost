import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { allPosts } from '../../store/selector/post.selector';
import { PostState } from '../../store/reducers/post.reducers';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  posts$ = this.store.pipe(select(allPosts()));

  constructor(private store: Store<PostState>) { }

  ngOnInit(): void {
    // this.posts$.subscribe(data => console.log(data))
  }

}
