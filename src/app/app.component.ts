import { Component, OnInit } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { EntryTreeGQL, EntryTreeQuery } from 'src/generated/graphql';
import { DirectoryService } from './directory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'jobjack-client';

  ngOnInit(): void {}
}
