import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { routes } from 'src/routes';
import { AppComponent } from './app.component';
import { FileFolderIconComponent } from './file-folder-icon/file-folder-icon.component';
import { FileFolderListItemComponent } from './file-folder-list-item/file-folder-list-item.component';
import { FlatListComponent } from './flat-list/flat-list.component';
import { FlatComponent } from './flat/flat.component';
import { GraphQLModule } from './graphql.module';
import { HomeComponent } from './home/home.component';
import { NavGroupComponent } from './nav-group/nav-group.component';
import { PaginationGroupComponent } from './pagination-group/pagination-group.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { TreeListComponent } from './tree-list/tree-list.component';
import { TreeComponent } from './tree/tree.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    SearchFormComponent,
    FlatComponent,
    FlatListComponent,
    TreeListComponent,
    HomeComponent,
    PaginationGroupComponent,
    FileFolderIconComponent,
    FileFolderListItemComponent,
    NavGroupComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GraphQLModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
