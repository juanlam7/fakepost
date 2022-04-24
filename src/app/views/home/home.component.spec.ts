import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { ComponentsModule } from '../../components/components.module';

import { HomeComponent } from './home.component';
import { Post } from '../../models/post';


describe('HomeComponent', () => {

  const initialState = {};
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ComponentsModule,
        FormsModule
      ],
      declarations: [ HomeComponent ],providers: [
        provideMockStore({
          initialState,
        })
      ]
    })
    .compileComponents();
  });

  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have posts as empty array`, () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    expect(app.posts).toEqual([]);
  });

  it(`should have newPost as new Post()`, () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    expect(app.newPost).toEqual(new Post());
  });

  it(`should dispatch when method addNewPosts() is called`, () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    let store = TestBed.inject(MockStore);
    store.dispatch = jest.fn();
    const dispatchSpy = store.dispatch;
    app.addNewPosts();
    expect(dispatchSpy).toBeCalledTimes(1);
  });
});
