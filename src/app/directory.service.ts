import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileFolder } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class DirectoryService {
  URL = 'http://localhost:3000/directory';

  constructor(private http: HttpClient) {}

  getDirectoryInformation() {
    return this.http.get<FileFolder>(this.URL);
  }
}
