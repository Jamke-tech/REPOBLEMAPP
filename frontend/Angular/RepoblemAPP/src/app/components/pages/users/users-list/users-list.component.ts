import { Component, OnInit,HostListener, Inject } from '@angular/core';
import { User } from 'src/app/shared/models/user.interface';
import { DOCUMENT } from '@angular/common';
import { AuthService } from 'src/app/shared/services/auth.service';
import {
  ActivatedRoute, NavigationEnd, ParamMap, Router,
} from '@angular/router';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  //users: User[] = [];
  private query: string ="";;
  
  constructor(  
    @Inject(DOCUMENT) private document:Document,
    private userSvc: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
   // this.onUrlChanged();
  }
  
  public user: User = {
    name: 'TOni Oller',
    username:'pepito',
    avatar: 'https://recerca.upc.edu/bampla/en/Personnel/staff_members/Oller-Antoni/2008-01-08.4864239201/@@images/image.jpeg',
    surname: 'string',
    password: 'tring',
    email: 'toni.oller@upc.edu',
    tlf: 'string',

  }

  ngOnInit(): void {
    //this.getDataFromService()
  }

  /*private getDataFromService(): void {
    this.userSvc
      .searchCharacters(this.query)
      .pipe(take(1))
      .subscribe((res: any) => {
        if (res?.length) {
    
          this.users = [...this.users,...res];
          
        } else {
          this.users = [];
        }
      
  })
}*/

}
