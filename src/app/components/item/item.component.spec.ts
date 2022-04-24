import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { ComponentsModule } from '../../components/components.module';

import { ItemComponent } from './item.component';


describe('ItemComponent', () => {
  
  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ComponentsModule,
        FormsModule
      ],
      declarations: [ ItemComponent ],providers: [
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
});
