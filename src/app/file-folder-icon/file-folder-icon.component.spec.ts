import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileFolderIconComponent } from './file-folder-icon.component';

describe('FileFolderIconComponent', () => {
  let component: FileFolderIconComponent;
  let fixture: ComponentFixture<FileFolderIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileFolderIconComponent]
    });
    fixture = TestBed.createComponent(FileFolderIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
