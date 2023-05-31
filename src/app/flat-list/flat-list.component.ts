import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EntryFlat } from 'src/generated/graphql';

@Component({
  selector: 'app-flat-list',
  templateUrl: './flat-list.component.html',
})
export class FlatListComponent {
  @Input() data: EntryFlat[];

  @Output() pathUpdated: EventEmitter<string> = new EventEmitter<string>();

  pathUpdatedFromListItem(path: string): void {
    this.pathUpdated.emit(path);
  }
}
