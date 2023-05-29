import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeComponent } from './tree/tree.component';
import { DatePipe } from '@angular/common';
import { FolderIconComponent } from './folder-icon/folder-icon.component';
import { FileIconComponent } from './file-icon/file-icon.component';

@NgModule({
	declarations: [AppComponent, TreeComponent, FolderIconComponent, FileIconComponent],
	imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule],
	providers: [DatePipe],
	bootstrap: [AppComponent],
})
export class AppModule {}
