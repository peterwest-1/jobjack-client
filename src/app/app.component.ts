import { Component, OnInit } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { EntryGQL, EntryQuery } from 'src/generated/graphql';
import { DirectoryService } from './directory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'jobjack-client';

  constructor(private service: DirectoryService, private entryGQL: EntryGQL) {}

  entry: Observable<EntryQuery['entry']>;
  error?: string;

  //Consider putting in service?
  //Only used here, though
  private getEntryData(path?: string): void {
    const query = this.entryGQL.watch({ path });
    this.entry = query.valueChanges.pipe(
      map((result) => result.data.entry),
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
