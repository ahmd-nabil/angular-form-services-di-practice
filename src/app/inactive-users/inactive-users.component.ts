import { Component , OnInit} from "@angular/core";
import { UserService } from "../user.service";

@Component({
    selector: 'app-inactive-users',
    templateUrl: './inactive-users.component.html',
    styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
    users : {name:string, status:string}[] = [];
    constructor(private userService: UserService) {}
    
    ngOnInit(): void {
        this.users = this.userService.inactiveUsers;
    }

    setActive(user: {name: string, status:string}) {
        this.userService.setActive(user);
    }
}