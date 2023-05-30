import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EntryData } from 'src/types';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DirectoryService {
  private URL = 'http://localhost:3000/directory';

  constructor(private http: HttpClient) {}

  //TODO: Consider combining fetchData and fetchDataWithPath
  fetchData(path?: string): Observable<EntryData> {
    const updatedPath = path ? this.URL + '?path=' + path : this.URL;
    const response = this.http
      .get<EntryData>(updatedPath)
      .pipe(retry(1), catchError(this.handleError));
    return response;
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
