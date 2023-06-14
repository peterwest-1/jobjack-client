import { Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { FlatComponent } from './app/flat/flat.component';
import { TreeComponent } from './app/tree/tree.component';
import { OptimizedComponent } from './app/optimized/optimized.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'flat', component: FlatComponent, title: 'Flat' },
  { path: 'tree', component: TreeComponent, title: 'Tree' },
  { path: 'optimized', component: OptimizedComponent, title: 'Optimized' },
];
