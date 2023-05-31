import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EntryTree } from 'src/generated/graphql';

@Component({
  selector: 'app-tree-list',
  templateUrl: './tree-list.component.html',
})
export class TreeListComponent {
  @Input() data: EntryTree;

  @Output() pathClick: EventEmitter<string> = new EventEmitter<string>();

  pathUpdatedFromListItem(path: string): void {
    this.pathClick.emit(path);
  }
}
