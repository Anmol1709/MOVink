import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareServiceService {


  private userData = new BehaviorSubject<{ user: string, role: string }>({ user: '', role: '' });
  userData$ = this.userData.asObservable();


  sendcurrent_user(user: string, role: string) {
    this.userData.next({ user, role });

  }



}