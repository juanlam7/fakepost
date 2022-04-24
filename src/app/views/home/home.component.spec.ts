import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';

import { postReducer } from '../../store/reducers/post.reducers';
import { PostEffects } from '../../store/effects/post.effects';
import { commentReducer } from '../../store/reducers/comment.reducers';
import { CommentEffects } from '../../store/effects/comment.effects';
import { ComponentsModule } from '../../components/components.module';

import { HomeComponent } from './home.component';


describe('HomeComponent', () => {
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ posts: postReducer, comments: commentReducer }),
        EffectsModule.forRoot([PostEffects, CommentEffects]),
        HttpClientModule,
        ComponentsModule,
        FormsModule
      ],
      declarations: [ HomeComponent ]
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
});
