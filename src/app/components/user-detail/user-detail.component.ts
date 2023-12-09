import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserById } from 'src/app/models/user-by-id';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  pageTitle = 'User details';
  user: UserById;
  userSubscription: Subscription;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userSubscription = this.userService.getUserById(id).subscribe({
      next: user => this.user = user,
      error: err => console.error(JSON.stringify(err))
    })
  }

  goBack(): void {
    this.router.navigate(['/users']);
  }
}
