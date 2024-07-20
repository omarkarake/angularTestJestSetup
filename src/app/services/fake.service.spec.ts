import { of, throwError } from 'rxjs';
import { FakeService } from './fake.service';
import { HttpErrorResponse } from '@angular/common/http';

describe('FakeService', () => {
  let service: FakeService;
  let httpClientSpy: any;

  beforeEach(() => {
    httpClientSpy = {
      get: jest.fn(), // this is way to mock a function in jest
    };
    service = new FakeService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test getDataV1', () => {
    const res = 'Techpsworld';
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res));
    service.getDatav1(); //triggering method in service
    expect(httpClientSpy.get).toBeCalledTimes(1);
    expect(httpClientSpy.get).toHaveBeenCalledWith(url);
  });

  it('should test getDataV2', (done) => {
    const res = 'Techpsworld';
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res));
    service.getDatav2().subscribe({
      next: (data) => {
        expect(data).toEqual(res);
        done();
      },
      error: (error) => console.log(error),
    }); //triggering method in service
    expect(httpClientSpy.get).toBeCalledTimes(1);
    expect(httpClientSpy.get).toHaveBeenCalledWith(url);
  });

  it('should getDataV2 throw error', (done) => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found',
    });
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    jest
      .spyOn(httpClientSpy, 'get')
      .mockReturnValue(throwError(() => errorResponse));
    service.getDatav2().subscribe({
      next: (data) => console.log(data),
      error: (error) => {
        expect(error.message).toContain('test 404 error');
        done();
      },
    }); //triggering method in service
    expect(httpClientSpy.get).toBeCalledTimes(1);
    expect(httpClientSpy.get).toHaveBeenCalledWith(url);
  });
});
