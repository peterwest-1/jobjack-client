import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileFolder } from 'src/types';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class DirectoryService {
  private URL = 'http://localhost:3000/directory';

  constructor(private http: HttpClient, private apollo: Apollo) {}

  thing() {
    this.apollo.watchQuery({
      query: gql`
        {
          rates(currency: "USD") {
            currency
            rate
          }
        }
      `,
    });
  }

  //TODO: Consider combining fetchData and fetchDataWithPath
  fetchData(): Observable<FileFolder> {
    const response = this.http
      .get<FileFolder>(this.URL)
      .pipe(retry(1), catchError(this.handleError));
    return response;
  }

  fetchDataWithPath(path: string): Observable<FileFolder> {
    const updatedPath = this.URL + '?path=' + path;
    return this.http
      .get<FileFolder>(updatedPath)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
