import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CommentsService } from './comments.service';
import { Comments } from '../models/comments';


describe('CommentsService', () => {
  let httpTestingController: HttpTestingController;
  let service: CommentsService;
  const url = 'https://jsonplaceholder.typicode.com/comments';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.inject(HttpTestingController);

    service = TestBed.inject(CommentsService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getComments should return expected data', (done) => {
    const sendData: Comments[] = [
      {
        id: 5,
        postId: 9,
        name: 'string',
        email: 'string',
        body: 'string',
      }
    ];

    service.getComments().subscribe(data => {
      expect(data).toEqual(sendData);
      done();
    });

    const testRequest = httpTestingController.expectOne(url);

    testRequest.flush(sendData);
  });

  it('getCommentsById should use GET to retrieve data', () => {
    const id: number = 9;
    service.getCommentsById(id).subscribe();

    const testRequest = httpTestingController.expectOne(`${url}?postId=${id}`);

    expect(testRequest.request.method).toEqual('GET');
  });


  it('addComments should return expected data', (done) => {
    const sendData = new Comments();

    service.addComments(sendData).subscribe(data => {
      expect(data).toEqual(sendData);
      done();
    });

    const testRequest = httpTestingController.expectOne(url);

    testRequest.flush(sendData);
  });

  it('deleteComments should return expected data', (done) => {
    const sendData = new Comments();

    service.deleteComments(sendData.id).subscribe(data => {
      expect(data).toEqual(sendData);
      done();
    });

    const testRequest = httpTestingController.expectOne(`${url}/${sendData.id}`);

    testRequest.flush(sendData);
  });

  it('updateComments should return expected data', (done) => {
    const sendData = new Comments();

    service.updateComments(sendData).subscribe(data => {
      expect(data).toEqual(sendData);
      done();
    });

    const testRequest = httpTestingController.expectOne(`${url}/${sendData.id}`);

    testRequest.flush(sendData);
  });

  it('getComments should return on error', (done) => {
    const expectedData = 500;

    service.getComments().subscribe(data => {
      console.log(data);
    }, (err) => {
      expect(err.status).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne(url);

    testRequest.flush('error', { status: 500, statusText: 'Broken Service' });
  });

  it('getCommentsById should return on error', (done) => {
    const sendData = 500;
    const id: number = 9;

    service.getCommentsById(id).subscribe(data => {
      console.log(data);
    }, (err) => {
      expect(err.status).toEqual(sendData);
      done();
    });

    const testRequest = httpTestingController.expectOne(`${url}?postId=${id}`);

    testRequest.flush('error', { status: 500, statusText: 'Broken Service' });
  });

  it('addComments should return on error', (done) => {
    const sendData = new Comments();
    const recived = 500;

    service.addComments(sendData).subscribe(data => {
      console.log(data);
    }, (err) => {
      expect(err.status).toEqual(recived);
      done();
    });

    const testRequest = httpTestingController.expectOne(url);

    testRequest.flush('error', { status: 500, statusText: 'Broken Service' });
  });

  it('deleteComments should return on error', (done) => {
    const sendData = new Comments();
    const recived = 500;

    service.deleteComments(sendData.id).subscribe(data => {
      console.log(data);
    }, (err) => {
      expect(err.status).toEqual(recived);
      done();
    });

    const testRequest = httpTestingController.expectOne(`${url}/${sendData.id}`);

    testRequest.flush('error', { status: 500, statusText: 'Broken Service' });
  });

  it('updateComments should return on error', (done) => {
    const sendData = new Comments();
    const recived = 500;

    service.updateComments(sendData).subscribe(data => {
      console.log(data);
    }, (err) => {
      expect(err.status).toEqual(recived);
      done();
    });

    const testRequest = httpTestingController.expectOne(`${url}/${sendData.id}`);

    testRequest.flush('error', { status: 500, statusText: 'Broken Service' });
  });
});
