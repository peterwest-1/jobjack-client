import { Component } from '@angular/core';
import { Observable, catchError, count, map, of } from 'rxjs';
import { EntryFlatGQL, EntryFlatQuery } from 'src/generated/graphql';

@Component({
  selector: 'app-flat',
  templateUrl: './flat.component.html',
})
export class FlatComponent {
  constructor(private entryFlatGQL: EntryFlatGQL) {}

  entries: Observable<EntryFlatQuery['entryFlat']>;
  error?: string;

  pageOffset = 0;

  //Consider putting in service?
  //Only used here, thoughk
  private getEntryData(pageOffset: number, path?: string): void {
    const query = this.entryFlatGQL.watch({
      path,
      pageOffset: this.pageOffset,
      pageSize: 10,
    });
    this.entries = query.valueChanges.pipe(
      map((result) => result.data.entryFlat),
      catchError((error) => {
        this.error = error || 'Error, probably shouldnt get here';
        //Not exactly sure what this does, read up on it
        return of(EMPTY);
      })
    );
  }

  //Poossible to get the query to detect change of `pageOffset`
  onChangePage(value: number) {
    this.pageOffset += value;
    if (this.pageOffset < 0) this.pageOffset = 0;
    this.getEntryData(this.pageOffset);
  }

  ngOnInit(): void {
    this.getEntryData(this.pageOffset);
  }

  onDirectoryPathChanged(path: string): void {
    //potential bug, might need to set pageOffset to 0
    console.log('onDirectoryPathChanged::flat.coomponent');
    this.getEntryData(this.pageOffset, path);
  }
}

const EMPTY = [
  {
    name: '',
    path: '',
    isDirectory: false,
    link: '',
    size: -1,
    extension: '',
    createdAt: '',
    permissions: '',
  },
];
