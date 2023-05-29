import { Component, OnInit } from '@angular/core';
import { DirectoryService } from './directory.service';
import { FileFolder } from 'src/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'jobjack-client';

  constructor(private service: DirectoryService) {}

  data: FileFolder | undefined;

  showDirectoryInformation() {
    this.service
      .getDirectoryInformation()
      .subscribe((data: FileFolder) => (this.data = { ...data }));
  }

  onDirectoryPathChanged(eventData: { path: string }) {
    console.log(eventData.path);
  }

  ngOnInit(): void {
    this.showDirectoryInformation();
  }
}
