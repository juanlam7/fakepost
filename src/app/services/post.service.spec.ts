import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostService } from './post.service';
import { Post } from '../models/post';


describe('PostService', () => {
  let httpTestingController: HttpTestingController;
  let service: PostService;
  const url = 'https://jsonplaceholder.typicode.com/posts';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.inject(HttpTestingController);

    service = TestBed.inject(PostService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getPosts should return expected data', (done) => {
    const sendData: Post[] = [
      {
        id: 5,
        title: 'string',
        body: 'string',
        userId: 8
      }
    ];

    service.getPosts().subscribe(data => {
      expect(data).toEqual(sendData);
      done();
    });

    const testRequest = httpTestingController.expectOne(url);

    testRequest.flush(sendData);
  });

  it('getPosts should use GET to retrieve data', () => {
    service.getPosts().subscribe();

    const testRequest = httpTestingController.expectOne(url);

    expect(testRequest.request.method).toEqual('GET');
  });


  it('addPosts should return expected data', (done) => {
    const sendData = new Post();

    service.addPost(sendData).subscribe(data => {
      expect(data).toEqual(sendData);
      done();
    });

    const testRequest = httpTestingController.expectOne(url);

    testRequest.flush(sendData);
  });

  it('deletePosts should return expected data', (done) => {
    const sendData = new Post();

    service.deletePost(sendData.id).subscribe(data => {
      expect(data).toEqual(sendData);
      done();
    });

    const testRequest = httpTestingController.expectOne(`${url}/${sendData.id}`);

    testRequest.flush(sendData);
  });

  it('updatePosts should return expected data', (done) => {
    const sendData = new Post();

    service.updatePost(sendData).subscribe(data => {
      expect(data).toEqual(sendData);
      done();
    });

    const testRequest = httpTestingController.expectOne(`${url}/${sendData.id}`);

    testRequest.flush(sendData);
  });

  it('getPosts should return on error', (done) => {
    const expectedData = 500;

    service.getPosts().subscribe(data => {
      console.log(data);
    }, (err) => {
      expect(err.status).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne(url);

    testRequest.flush('error', { status: 500, statusText: 'Broken Service' });
  });

  it('addPosts should return on error', (done) => {
    const sendData = new Post();
    const recived = 500;

    service.addPost(sendData).subscribe(data => {
      console.log(data);
    }, (err) => {
      expect(err.status).toEqual(recived);
      done();
    });

    const testRequest = httpTestingController.expectOne(url);

    testRequest.flush('error', { status: 500, statusText: 'Broken Service' });
  });

  it('deletePosts should return on error', (done) => {
    const sendData = new Post();
    const recived = 500;

    service.deletePost(sendData.id).subscribe(data => {
      console.log(data);
    }, (err) => {
      expect(err.status).toEqual(recived);
      done();
    });

    const testRequest = httpTestingController.expectOne(`${url}/${sendData.id}`);

    testRequest.flush('error', { status: 500, statusText: 'Broken Service' });
  });

  it('updatePosts should return on error', (done) => {
    const sendData = new Post();
    const recived = 500;

    service.updatePost(sendData).subscribe(data => {
      console.log(data);
    }, (err) => {
      expect(err.status).toEqual(recived);
      done();
    });

    const testRequest = httpTestingController.expectOne(`${url}/${sendData.id}`);

    testRequest.flush('error', { status: 500, statusText: 'Broken Service' });
  });
});
