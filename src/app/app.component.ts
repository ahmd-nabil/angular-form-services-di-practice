import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user : {name: string, status: string} ;
  title = 'services-and-di';

  constructor(private userService: UserService) {
    this.user = {name: '', status: ''}
  }

  onSubmit(user: {name: string, status:string}) {
    this.userService.addUser({name: user.name, status: user.status});
  }
}
