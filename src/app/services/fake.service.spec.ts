import { of } from 'rxjs';
import { FakeService } from './fake.service';

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

  it('should test getDataV1', (done) => {
    const res = 'Techpsworl';
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
});
