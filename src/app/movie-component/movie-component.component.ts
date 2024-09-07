import { Component, OnInit, inject, numberAttribute, NgIterable, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pipe } from '@angular/core';

import { LoginComponent } from '../login/login.component';
import { ShareServiceService } from '../share-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { TodoCardComponent } from '../todo-card/todo-card.component';
import { log } from 'console';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie-component',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule, TodoCardComponent],
  templateUrl: './movie-component.component.html',
  styleUrl: './movie-component.component.css'
})
export class MovieComponentComponent implements OnInit {

  current_user: string = JSON.parse(localStorage.getItem('current_USER_name') || "");
  current_id: number = 1;
  user_todo: any[] = [];
  current_role: String = JSON.parse(localStorage.getItem('current_role') || "");;
  status: string = "In Queue";
  userData!: {
    user: string;
    role: string;
  };
  admin: boolean = false;
  admin_todo: any[] = [];
  changed: boolean = true;


  changevalue(val: any) {
    this.user_todo = val;
  }



  constructor(private ShareServiceService: ShareServiceService, private router: Router,) {

    this.ShareServiceService.userData$.subscribe(data => { this.userData = data });

    this.current_user = this.userData.user;
    this.current_role = this.userData.role;
    this.admin = false;



  }




  ngOnInit(): void {



    this.admin = false;


    this.current_user = JSON.parse(localStorage.getItem('current_USER_name') || "");

    this.current_role = JSON.parse(localStorage.getItem('current_role') || "");



    var user = JSON.parse(localStorage.getItem('total_todo') || "");


    for (let name in user) {
      if (Array.isArray(user[name])) {
        user[name].forEach(((todo: { Todo_title: string, Todo_desc: string, Status: string, user_name: string }) => {
          this.admin_todo.push(todo);
        }))
      }
    }


    if (this.current_role == 'Admin') {
      this.user_todo = this.admin_todo;

    }
    else {
      this.user_todo = user[this.current_user];

    }

    // this.user_todo = JSON.parse(localStorage.getItem(this.current_user) || "[]");

    console.count("current_user: " + this.current_user + "ll" + this.user_todo);
    console.log("y h liya hua role new vala " + this.current_role + "kjdsk");




  }



  logout(): void {

    localStorage.setItem('current_USER_name', JSON.stringify(""));
    localStorage.setItem('current_role', JSON.stringify(""));
    this.router.navigateByUrl('/login');
    
  }


  http = inject(HttpClient);
  data: any = [];

  Add_New(value: any) {

    if (this.changed == false) {
      this.changed = true;
    }
    else {
      this.changed = false;
    }


    console.log("chnaged value " + this.changed);
    var current_todo = JSON.parse(localStorage.getItem(this.current_user) || "[]");
    current_todo.push({ Todo_title: value.Todo_title, Todo_desc: value.Todo_desc, Status: this.status, user_name: this.current_user })

    localStorage.setItem(this.current_user, JSON.stringify(current_todo));

    if (this.current_role == 'Admin') {
      console.log("dssdsd");
      this.user_todo = this.admin_todo;

    }
    else {
      this.user_todo = JSON.parse(localStorage.getItem(this.current_user) || "[]");
    }




    var total = JSON.parse(localStorage.getItem('total_todo') || "{}");
    total[this.current_user].push({ Todo_title: value.Todo_title, Todo_desc: value.Todo_desc, Status: this.status, user_name: this.current_user });

    localStorage.setItem('total_todo', JSON.stringify(total));

    this.ngOnInit();

  }


}
