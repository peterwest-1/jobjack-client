import { Component, OnDestroy, OnInit } from '@angular/core';
import { DirectoryService } from './directory.service';
import { EntryData } from 'src/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'jobjack-client';

  constructor(private service: DirectoryService) {}

  data: EntryData;
  error?: string;

  fetchData(path?: string): void {
    const handleError = (error: any) => {
      this.error =
        error.message || 'Error retrieving data. Please try again later.';
    };

    this.service.fetchData(path).subscribe({
      next: (data) => {
        this.data = data;
      },
      error: handleError,
    });
  }

  onDirectoryPathChanged(path: string): void {
    this.fetchData(path);
  }

  ngOnInit(): void {
    this.fetchData();
  }
}
