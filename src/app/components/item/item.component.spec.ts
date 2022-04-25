import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { ComponentsModule } from '../../components/components.module';

import { ItemComponent } from './item.component';
import { Post } from '../../models/post';


describe('ItemComponent', () => {

  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ComponentsModule,
        FormsModule
      ],
      declarations: [ItemComponent], providers: [
        provideMockStore({
          initialState,
        })
      ]
    })
      .compileComponents();
  });

  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have updatedPost as new Post() and showDeleteAndEditBtn as true`, () => {
    const fixture = TestBed.createComponent(ItemComponent);
    const app = fixture.componentInstance;
    expect(app.updatedPost).toEqual(new Post());
    expect(app.receivedPost).toEqual(new Post());
    expect(app.showDeleteAndEditBtn).toEqual(true);
  });

  it(`should dispatch when method detetePost() is called`, () => {
    const fixture = TestBed.createComponent(ItemComponent);
    const app = fixture.componentInstance;
    let store = TestBed.inject(MockStore);
    store.dispatch = jest.fn();
    const dispatchSpy = store.dispatch;
    const id: number = 1;
    app.detetePost(id);
    expect(dispatchSpy).toBeCalledTimes(1);
  });

  it(`should change value showDeleteAndEditBtn when mehtod openComments() is called`, () => {
    const fixture = TestBed.createComponent(ItemComponent);
    const app = fixture.componentInstance;
    const postId: number = 1;
    app.openComments(postId);
    expect(app.showDeleteAndEditBtn).toBeFalsy;
  });

  it(`should postVisible emit event when mehtod openComments() is called`, () => {
    let emitted = false;
    const fixture = TestBed.createComponent(ItemComponent);
    const app = fixture.componentInstance;
    app.postVisible.subscribe(() => emitted = true);
    const postId: number = 1;
    app.openComments(postId);
    expect(emitted).toBeTruthy;
  });

  it('should render the text See comments correctly', () => {
    const fixture = TestBed.createComponent(ItemComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.it-open-comments')?.textContent).toContain('See comments');
  });
});
