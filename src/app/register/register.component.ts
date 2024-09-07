import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user_id: number = 0;
  username = "";
  password = "";
  role: string = "";

  constructor(private router: Router) {

  }


  Register(value: any) {

    var users = JSON.parse(localStorage.getItem('users') || '[]');
    this.username = value.username;
    this.password = value.password;
    console.log(this.role);

    console.log(value.role);

    if (value.length != 0) {
      const obj = { username: this.username, password: this.password, role: this.role };

      users.push(obj);
    }

    localStorage.setItem('users', JSON.stringify(users));
    this.router.navigateByUrl('/login');


    var total = JSON.parse(localStorage.getItem('total_todo') || "{}");
    total[this.username] = [];

    localStorage.setItem("total_todo", JSON.stringify(total));




    //  const obj= {this.username,value.password};






  }

}
