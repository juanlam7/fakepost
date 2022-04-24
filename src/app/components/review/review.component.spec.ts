import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

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
});
