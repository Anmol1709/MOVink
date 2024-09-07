import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatHint } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Output } from '@angular/core';
import { MovieComponentComponent } from '../movie-component/movie-component.component';
import { ShareServiceService } from '../share-service.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatHint, FormsModule, MovieComponentComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {





  constructor(private router: Router, private ShareServiceService: ShareServiceService) {

  }


  username = "";
  password = "";
  role = "";
  current_user: string = "";

  exist: boolean = false;

  login(value: any) {
    // console.log("value");
    // console.log(value);
    this.username = value.username;
    this.password = value.password;

    console.log("user.username ");

    var users = JSON.parse(localStorage.getItem('users') || '[]');

    console.log(users);

    if (users.length == 0) {
      alert("Username or password is invalid");
    }
    else {
      // console.log("Agya");
      users.forEach((user: { username: any, password: any, role: any }) => {


        // console.log(value.username + "-------" + user.username);
        // console.log(value.password + "-------" + user.password);
        if (value.username === user.username && value.password === user.password) {

          console.log("matched");
          this.exist = true;

          localStorage.setItem('current_USER_name', JSON.stringify(value.username));
          localStorage.setItem('current_role', JSON.stringify(user.role));
          // console.log(" role is" + this.role);
        }

      });

      console.log(this.exist);
      if (this.exist) {


        console.log("aaaa");
        this.current_user = value.username;
        this.ShareServiceService.sendcurrent_user(this.current_user, this.role);
        
        this.router.navigateByUrl('/movie');
        


      }

    }


  }





}
