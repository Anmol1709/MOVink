import { Routes, RouterModule } from '@angular/router';
import { NgModel } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MovieComponentComponent } from './movie-component/movie-component.component';
import { RegisterComponent } from './register/register.component';
import { canActive_movie } from './auth';
import { ChartComponent } from './chart/chart.component';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'movie', component: MovieComponentComponent, canActivate: [canActive_movie] },
    { path: 'register', component: RegisterComponent },
    { path: 'chart', component: ChartComponent },

    { path: '**', component: HomeComponent },
      

];
