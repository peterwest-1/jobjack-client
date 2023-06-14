import { Component } from '@angular/core';
import { routes } from 'src/routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  routes = routes;
}
