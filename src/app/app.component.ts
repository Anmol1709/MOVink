import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import bootstrap from '../main.server';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import chartdata from './db';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggleModule, RouterModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My_Api_movie';
}
