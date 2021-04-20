import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user.interface';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
  
  user$: Observable <User> | undefined;
  constructor(private route: ActivatedRoute,private userSvc: AuthService) { }

  ngOnInit(): void {

    this.route.params.pipe(take(1)).subscribe((params)=>{
        const id = params['id'];
        this.user$ = this.userSvc.getDetails(id);
    });

  }





}
