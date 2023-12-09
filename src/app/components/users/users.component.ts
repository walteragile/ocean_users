import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  usersSubscription: Subscription;
  users: any[] = [];

  constructor(private userService: UserService) { }
  
  ngOnInit(): void {  
    this.usersSubscription = this.userService.getUsers()
      .subscribe({
        next: users => this.users = users,
        error: err => console.error(err)
      });  
  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }
}
