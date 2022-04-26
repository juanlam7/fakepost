import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Comments } from '../../../app/models/comments';

import { ComponentsModule } from '../../components/components.module';

import { ReviewComponent } from './review.component';


describe('ReviewComponent', () => {
  
  const initialState = {};
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ComponentsModule,
        FormsModule
      ],
      declarations: [ ReviewComponent ],providers: [
        provideMockStore({
          initialState,
        })
      ]
    })
    .compileComponents();
  });

  let component: ReviewComponent;
  let fixture: ComponentFixture<ReviewComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should init variables as expected`, () => {
    const fixture = TestBed.createComponent(ReviewComponent);
    const app = fixture.componentInstance;
    expect(app.updatedComment).toEqual(new Comments());
    expect(app.newComment).toEqual(new Comments());
    expect(app.showAddNewComment).toEqual(false);
    expect(app.receivedPostId).toEqual(0);
    expect(app.comments$).toBeCalled;
  });

  it(`should dispatch when method deteteComment() is called`, () => {
    const fixture = TestBed.createComponent(ReviewComponent);
    const app = fixture.componentInstance;
    let store = TestBed.inject(MockStore);
    store.dispatch = jest.fn();
    const dispatchSpy = store.dispatch;
    const id: number = 1;
    app.deteteComment(id);
    expect(dispatchSpy).toBeCalledTimes(1);
  });

  it(`should dispatch when method addNewComment() is called`, () => {
    const fixture = TestBed.createComponent(ReviewComponent);
    const app = fixture.componentInstance;
    let store = TestBed.inject(MockStore);
    store.dispatch = jest.fn();
    const dispatchSpy = store.dispatch;
    app.addNewComment();
    expect(dispatchSpy).toBeCalledTimes(1);
  });
});
