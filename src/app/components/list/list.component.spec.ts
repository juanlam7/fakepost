import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { ComponentsModule } from '../../components/components.module';

import { ListComponent } from './list.component';


describe('ListComponent', () => {
  
  const initialState = {};
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ComponentsModule,
        FormsModule
      ],
      declarations: [ ListComponent ],providers: [
        provideMockStore({
          initialState,
        })
      ]
    })
    .compileComponents();
  });

  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
