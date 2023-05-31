import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
})
export class SearchFormComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  isInputEmpty = true;
  inputValue = '';

  checkInputValue() {
    this.isInputEmpty = this.inputValue.trim() === '';
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
