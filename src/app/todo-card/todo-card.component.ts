import { Component, Input, OnInit, Output, input, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Console } from 'console';


@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.css'
})
export class TodoCardComponent implements OnInit {

  @Input() obj: {
    Todo_title: string;
    Todo_desc: string;
    Status: string,
    user_name: string
  } | undefined;

  @Input() Status_f: any;
  @Input() user: any;
  @Input() updatedTODO: any;
  @Output() valuechange = new EventEmitter<any>();


  st: any = JSON.parse(localStorage.getItem('users') || "");


  dl_role: any
  role: string = "user_normal";

  ngOnInit(): void {


    var users = JSON.parse(localStorage.getItem("users") || "[]");
    users.forEach((user: {
      username: string, password: string, role: string
    }) => {
      if (user.username == this.user) {
        this.role = user.role;
      }
    })


  }


  delete(value: any, name: any): void {

    console.log("agya");
    var current_todo = JSON.parse(localStorage.getItem(name) || "[]");

    var new_todo: any[] = [];
    current_todo.forEach((todo: { Todo_title: string, Todo_desc: string, Status: string, user_name: string }) => {
      if (todo.Todo_title !== value) {
        new_todo.push(todo);
      }


    })

    localStorage.setItem(name, JSON.stringify(new_todo));


    var user = JSON.parse(localStorage.getItem('total_todo') || "");
    user[name] = [];
    user[name] = new_todo;
    localStorage.setItem('total_todo', JSON.stringify(user));

    this.valuechange.emit(new_todo);
  }


  Approval(title: any, user_name: any) {

    var current_todo = JSON.parse(localStorage.getItem(user_name) || "[]");

    var random: any[] = [];
    current_todo.forEach(((todo: { Todo_title: string, Todo_desc: string, Status: string, user_name: string }) => {
      if (todo.Todo_title == title) {
        var p = {
          Todo_title: todo.Todo_title, Todo_desc: todo.Todo_desc, Status: "Approved", user_name: todo.user_name
        }
        random.push(p);

        console.log("approved");

        random.push(p);

      }
      else {
        random.push(todo);
      }


    }));

    localStorage.setItem(user_name, JSON.stringify(random));

    var user1 = JSON.parse(localStorage.getItem('total_todo') || "");
    var c_todo = user1[user_name];

    console.log(c_todo);
    var ran: any[] = [];
    c_todo.forEach(((todo: { Todo_title: string, Todo_desc: string, Status: string, user_name: string }) => {
      if (todo.Todo_title == title) {
        var p = {
          Todo_title: todo.Todo_title, Todo_desc: todo.Todo_desc, Status: "Approved", user_name: todo.user_name
        }
        console.log("approved and value is ");
        ran.push(p);
      }
      else {
        ran.push(todo);
      }

    }));


    user1[user_name] = ran;

    localStorage.setItem('total_todo', JSON.stringify(user1));





    this.Status_f = "Approved";
  }


  disApproval(title: any, user_name: any) {
    var current_todo = JSON.parse(localStorage.getItem(user_name) || "[]");
    var random: any[] = [];
    current_todo.forEach(((todo: { Todo_title: string, Todo_desc: string, Status: string, user_name: string }) => {
      if (todo.Todo_title == title) {
        var p = {
          Todo_title: todo.Todo_title, Todo_desc: todo.Todo_desc, Status: "disapproved", user_name: todo.user_name
        }
        console.log("disapproved");
        random.push(p);
      }
      else {
        random.push(todo);
      }

    }));


    localStorage.setItem(user_name, JSON.stringify(random));

    var user1 = JSON.parse(localStorage.getItem('total_todo') || "");
    console.log("o");
    var c_todo = user1[user_name];
    console.log(c_todo);
    var ran: any[] = [];
    c_todo.forEach(((todo: { Todo_title: string, Todo_desc: string, Status: string, user_name: string }) => {
      if (todo.Todo_title == title) {
        var p = {
          Todo_title: todo.Todo_title, Todo_desc: todo.Todo_desc, Status: "disapproved", user_name: todo.user_name
        }
        console.log("disapproved");
        ran.push(p);
      }
      else {
        ran.push(todo);
      }

    }));


    user1[user_name] = ran;
    localStorage.setItem('total_todo', JSON.stringify(user1));



    this.Status_f = "disapproved";
  }




}