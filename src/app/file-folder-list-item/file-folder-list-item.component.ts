import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EntryFlat, EntryTree } from 'src/generated/graphql';

@Component({
  selector: 'app-file-folder-list-item',
  templateUrl: './file-folder-list-item.component.html',
})
export class FileFolderListItemComponent {
  @Input() item: EntryFlat | EntryTree;

  @Output() pathUpdated: EventEmitter<string> = new EventEmitter<string>();

  pathUpdatedFromListItem(item: any): void {
    if (item.isDirectory) {
      console.log('(click)FileFolderListItemComponent');
      this.pathUpdated.emit(item.path);
    }
  }
}
