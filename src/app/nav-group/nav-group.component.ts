import { Component, Input } from '@angular/core';
import { routes } from 'src/routes';

@Component({
  selector: 'app-nav-group',
  templateUrl: './nav-group.component.html',
})
export class NavGroupComponent {
  routes = routes;
}
