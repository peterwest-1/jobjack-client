import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent {

  @Input() data: any;

  @Output() pathClick: EventEmitter<string> = new EventEmitter<string>();

  onPathClick(item: any): void {
    if (item.isDirectory) {
      this.pathClick.emit(item.path);
    }
  }
}
