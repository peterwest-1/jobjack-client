import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

//NOT USED AT THE MOMENT
//Try implement in here instead of per component

@Injectable({
  providedIn: 'root',
})
export class DirectoryService {
  constructor(private apollo: Apollo) {}
}
