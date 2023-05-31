import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { SearchFormComponent } from './search-form/search-form.component';
import { TreeComponent } from './tree/tree.component';
import { FormsModule } from '@angular/forms';
import { DirectoryBreadcrumbComponent } from './directory-breadcrumb/directory-breadcrumb.component';
import { FlatComponent } from './flat/flat.component';
import { FlatListComponent } from './flat-list/flat-list.component';
import { TreeListComponent } from './tree-list/tree-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaginationGroupComponent } from './pagination-group/pagination-group.component';
import { FileFolderIconComponent } from './file-folder-icon/file-folder-icon.component';
import { FileFolderListItemComponent } from './file-folder-list-item/file-folder-list-item.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'flat', component: FlatComponent },
  { path: 'tree', component: TreeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    SearchFormComponent,
    DirectoryBreadcrumbComponent,
    FlatComponent,
    FlatListComponent,
    TreeListComponent,
    HomeComponent,
    PaginationGroupComponent,
    FileFolderIconComponent,
    FileFolderListItemComponent,
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
