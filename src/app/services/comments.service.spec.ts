import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CommentsService } from './comments.service';


describe('CommentsService', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      declarations: []
    })
      .compileComponents();
  });

  let service: CommentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
