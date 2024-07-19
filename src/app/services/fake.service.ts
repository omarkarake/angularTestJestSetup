import { HttpErrorResponse, HttpUrlEncodingCodec } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FakeService {
  constructor(private http: HttpClient) {}
  getDatav1(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    return this.http.get(url);
  }
  getDatav2(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    return this.http
      .get(url)
      .pipe(tap((data: any) => console.log('data is fetched: ', data)));
  }

  private handleErrors<T>(operation = 'operation') {
    return (error: HttpErrorResponse): Observable<T> => {
      // TODO: send the error to remotte logging infrastructure
      console.error(error);
      const message = `server returned code ${error.status} with body "${error.error}"`;
      // TODO: better job of transforming error for user consumption
      throw new Error(`${operation} failed: ${message}`);
    };
  }
}
