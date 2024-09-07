
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeCardService {


  private changedtodo = new BehaviorSubject<{ title: string, desc: string }>({ title: '', desc: '' });
  Todo_data$ = this.changedtodo.asObservable();


  sendcurrent_user(title: string, desc: string) {
    this.changedtodo.next({ title, desc });

  }



}