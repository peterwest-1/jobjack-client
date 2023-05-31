import { Component } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { EntryTreeGQL, EntryTreeQuery } from 'src/generated/graphql';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
})
export class TreeComponent {
  constructor(private entryTreeGQL: EntryTreeGQL) {}

  entry: Observable<EntryTreeQuery['entryTree']>;
  error?: string;

  //Consider putting in service?
  //Only used here, thoughk
  private getEntryData(path?: string): void {
    const query = this.entryTreeGQL.watch({ path });
    this.entry = query.valueChanges.pipe(
      map((result) => result.data.entryTree),
      catchError((error) => {
        this.error = error || 'Error, probably shouldnt get here';
        //Not exactly sure what this does, read up on it
        return of(EMPTY);
      })
    );
  }

  ngOnInit(): void {
    this.getEntryData();
  }

  onDirectoryPathChanged(path: string): void {
    this.getEntryData(path);
  }
}

//Is this allowed here?
const EMPTY = {
  name: '',
  path: '',
  isDirectory: false,
  link: '',
  size: -1,
  extension: '',
  createdAt: '',
  children: [],
};
