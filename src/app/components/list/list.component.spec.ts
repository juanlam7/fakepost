import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';

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
      declarations: [ListComponent], providers: [
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

  it(`should init variables as expected`, () => {
    const fixture = TestBed.createComponent(ListComponent);
    const app = fixture.componentInstance;
    expect(app.copyAllPost).toEqual([]);
    expect(app.searchText).toEqual('');
    expect(app.postOrder).toEqual(false);
  });

  it(`should change value postOrder when mehtod sortPost() is called`, () => {
    const fixture = TestBed.createComponent(ListComponent);
    const app = fixture.componentInstance;
    app.sortPost();
    expect(app.postOrder).toEqual(true);
  });

  it(`should change value postOrder when mehtod sortPost() is called`, () => {
    const fixture = TestBed.createComponent(ListComponent);
    const app = fixture.componentInstance;
    app.copyAllPost = [
      {
        id: 4,
        userId: 5,
        title: 'cba',
        body: 'nncv cxvmxc'
      },
      {
        id: 3,
        userId: 2,
        title: 'bca',
        body: 'nncv cxvmxc'
      },
      {
        id: 6,
        userId: 8,
        title: 'abc',
        body: 'nncv cxvmxc'
      }
    ]
    app.sortPost();
    expect(app.copyAllPost).not.toHaveLength(2);
    expect(app.copyAllPost[0].title).toEqual('abc');
  });

  it(`should order copyAllPost from z-a when mehtod sortPost() is called and postOrder value is true`, () => {
    const fixture = TestBed.createComponent(ListComponent);
    const app = fixture.componentInstance;
    app.copyAllPost = [
      {
        id: 4,
        userId: 5,
        title: 'cba',
        body: 'nncv cxvmxc'
      },
      {
        id: 3,
        userId: 2,
        title: 'bca',
        body: 'nncv cxvmxc'
      },
      {
        id: 6,
        userId: 8,
        title: 'abc',
        body: 'nncv cxvmxc'
      }
    ];
    app.postOrder = true;
    app.sortPost();
    expect(app.copyAllPost).toHaveLength(3);
    expect(app.copyAllPost[0].title).toEqual('cba');
  });

  it(`should get just one object with propertie visible true when managePostVisible method is called`, () => {
    const fixture = TestBed.createComponent(ListComponent);
    const app = fixture.componentInstance;
    app.copyAllPost = [
      {
        id: 4,
        userId: 5,
        title: 'cba',
        body: 'nncv cxvmxc',
        visible: false
      },
      {
        id: 3,
        userId: 2,
        title: 'bca',
        body: 'nncv cxvmxc',
        visible: false
      },
      {
        id: 6,
        userId: 8,
        title: 'abc',
        body: 'nncv cxvmxc',
        visible: false
      }
    ];
    const postId: number = 3;
    app.managePostVisible(postId);
    const checkForTrue = app.copyAllPost.filter(el => el.visible === true);
    expect(checkForTrue).toHaveLength(1);
  });
});
