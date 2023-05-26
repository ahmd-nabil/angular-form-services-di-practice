import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{
  activeUsers : {name: string, status: string}[] = [{name: 'Ahmed', status:'active'}, {name: 'ayman', status:'active'}]
  inactiveUsers : {name: string, status: string}[] = [{name: 'ali', status:'inactive'}, {name: 'ashf', status:'inactive'}];

  constructor() { }

  ngOnInit(): void {
  }

  addUser(user: {name: string, status: string}) {
    if(user.status == 'active') {
      this.activeUsers.push(user);
    } else {
      this.inactiveUsers.push(user);
    }
  }

  setActive(user: {name: string, status:string}) {
    let indx = this.inactiveUsers.indexOf(user);
    this.inactiveUsers.splice(indx, 1);
    user.status = 'active';
    this.activeUsers.push(user);
  }
  
  
  setInactive(user: {name: string, status:string}) {
    let indx = this.activeUsers.indexOf(user);
    this.activeUsers.splice(indx, 1);
    user.status = 'inactive';
    this.inactiveUsers.push(user);
  }
}
