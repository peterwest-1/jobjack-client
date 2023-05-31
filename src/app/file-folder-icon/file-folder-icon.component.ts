import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-file-folder-icon',
  template: `<div *ngIf="isDirectory; else elseBlock">
      <svg width="24px" height="24px" viewBox="0 0 24 24">
        <path
          d="M2,18.8V5.3A2.3,2.3,0,0,1,4.3,3H9.6a1.1,1.1,0,0,1,.8.4l2.8,3.2a1.1,1.1,0,0,0,.8.4h5.6A2.2,2.2,0,0,1,22,9.2v9.7A2.2,2.2,0,0,1,19.8,21H4.2A2.2,2.2,0,0,1,2,18.8Z"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        ></path>
      </svg>
    </div>

    <ng-template #elseBlock>
      <svg width="24px" height="24px" viewBox="0 0 24 24">
        <path
          d="M18,22H6a2,2,0,0,1-2-2V4A2,2,0,0,1,6,2h7.1a2,2,0,0,1,1.5.6l4.9,5.2A2,2,0,0,1,20,9.2V20A2,2,0,0,1,18,22Z"
          fill="none"
          id="File"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        ></path>
        <line
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          x1="7.9"
          x2="16.1"
          y1="17.5"
          y2="17.5"
        ></line>
        <line
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          x1="7.9"
          x2="16.1"
          y1="13.5"
          y2="13.5"
        ></line>
        <line
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          x1="8"
          x2="13"
          y1="9.5"
          y2="9.5"
        ></line>
      </svg>
    </ng-template>`,
})
export class FileFolderIconComponent {
  @Input() isDirectory: boolean;
}
