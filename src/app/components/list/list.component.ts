import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { allPosts } from '../../store/selector/post.selector';
import { PostState } from '../../store/reducers/post.reducers';

export interface CopyPost {
  id: number;
  userId: number;
  title: string;
  body: string;
  visible?: boolean;
};

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  copyAllPost: CopyPost[] = [];
  searchText: string = '';
  postOrder: boolean = false;

  constructor(private store: Store<PostState>) { }

  ngOnInit(): void {
    this.getAllPostAndHandle();
  }

  getAllPostAndHandle() {
    this.store.pipe(select(allPosts())).subscribe((data) => {
      this.copyAllPost = data.map((element: CopyPost) => {
        const newObject = Object.assign({}, element);
        newObject.visible = false;
        return newObject;
      })
    });
  }

  managePostVisible(postId?: number) {
    this.copyAllPost.filter((post) => {
      if ( post.id === postId) {
        return post.visible = !post.visible;
      }
      return post.visible = false;
    })
  }

  sortPost() {
    this.postOrder = !this.postOrder;
    if (this.postOrder) {
      //title a -z
      this.copyAllPost.sort((a, b) => a.title.normalize().localeCompare(b.title.normalize()));
    } else {
      //title z - a
      this.copyAllPost.sort((a, b) => b.title.normalize().localeCompare(a.title.normalize()));
    }
  }
}
