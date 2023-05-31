import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-group',
  templateUrl: './pagination-group.component.html',
})
export class PaginationGroupComponent {
  @Input() pageOffset: number;

  //FIXME: Disable button doesnt work,
  get isPreviousDisabled() {
    return this.pageOffset === 0;
  }
  @Output() changePagePressed: EventEmitter<number> =
    new EventEmitter<number>();

  onPreviousPagePressed(): void {
    this.changePagePressed.emit(-1);
  }

  onNextPagePressed(): void {
    this.changePagePressed.emit(1);
  }
}
