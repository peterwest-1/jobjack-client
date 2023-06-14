import { Component } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { EntryBfsGQL, EntryBfsQuery } from 'src/generated/graphql';

@Component({
  selector: 'app-optimized',
  templateUrl: './optimized.component.html',
})
export class OptimizedComponent {
  constructor(private entryBfsGQL: EntryBfsGQL) {}

  entries: Observable<EntryBfsQuery['entryBFS']>;
  error?: string;

  pageOffset = 0;

  private getEntryData(pageOffset: number, path?: string): void {
    const query = this.entryBfsGQL.watch({
      path,
      pageOffset: this.pageOffset,
      pageSize: 10,
    });
    this.entries = query.valueChanges.pipe(
      map((result) => result.data.entryBFS),
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
    this.getEntryData(this.pageOffset, path);
  }
}

//FIND BETTER WAY
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
