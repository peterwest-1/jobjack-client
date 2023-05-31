import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-directory-breadcrumb',
  templateUrl: './directory-breadcrumb.component.html',
})
export class DirectoryBreadcrumbComponent implements OnInit {
  @Input() paths: string[] = ['src', 'helpers'];

  ngOnInit(): void {}
}
