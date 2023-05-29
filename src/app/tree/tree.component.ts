import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileFolder } from 'src/types';

@Component({
	selector: 'app-tree',
	templateUrl: './tree.component.html',
	styleUrls: ['./tree.component.scss'],
})
export class TreeComponent {
	@Input() data: FileFolder;
	@Output() pathClick: EventEmitter<string> = new EventEmitter<string>();

	onPathClick(item: any): void {
		if (item.isDirectory) {
			this.pathClick.emit(item.path);
		}
	}
}
