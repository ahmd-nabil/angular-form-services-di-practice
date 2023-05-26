import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";

@Component({
    selector: 'app-acitve-users',
    templateUrl: './active-users.component.html',
    styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
    users: {name:string, status:string}[] = [];
    
    constructor(private userService: UserService){}

    ngOnInit(): void {
        this.users= this.userService.activeUsers;    
    }

    setInActive(user: {name:string, status:string}) {
        this.userService.setInactive(user);
    }
}