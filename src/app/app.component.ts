import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { EntryGQL, EntryQuery } from 'src/generated/graphql';
import { FileFolder } from 'src/types';
import { DirectoryService } from './directory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'jobjack-client';

  constructor(private service: DirectoryService, private entryGQL: EntryGQL) {
    this.entry = this.entryGQL
      .watch()
      .valueChanges.pipe(map((result) => result.data.entry));

    this.entry.subscribe((data) => {
      this.data = data;
    });
  }

  data: any;
  error?: string;

  entry: Observable<EntryQuery['entry']>;

  // fetchData(): void {
  //   this.service.fetchData().subscribe(
  //     (data) => {
  //       this.data = data;
  //     },
  //     (error) => {
  //       this.error = error.message
  //         ? error.message
  //         : 'Error retrieving data. Please try again later.';
  //     }
  //   );
  // }

  onDirectoryPathChanged(path: string): void {
    this.service.fetchDataWithPath(path).subscribe(
      (data) => {
        this.data = data;
      },
      (error) => {
        this.error = error.message
          ? error.message
          : 'Error retrieving data. Please try again later.';
      }
    );
  }
}
