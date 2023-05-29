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

	data: FileFolder;
	error?: string;

	fetchData(): void {
		this.service.fetchData().subscribe(
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

	ngOnInit(): void {
		this.fetchData();
	}
}
