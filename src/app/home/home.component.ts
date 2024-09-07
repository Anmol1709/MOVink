import { Component } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { routes } from '../app.routes';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
