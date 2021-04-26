import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { User } from 'src/app/shared/models/user.interface';
import { DOCUMENT } from '@angular/common';
import { AuthService } from 'src/app/shared/services/auth.service';
import {
  ActivatedRoute,
  NavigationEnd,
  ParamMap,
  Router,
} from '@angular/router';
import { filter, take } from 'rxjs/operators';
import { empty } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  
  users: User[] = [];
  ids : string[] = [];
  private query: string = '';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private userSvc: AuthService,
    private route: ActivatedRoute,
    private router: Router
   
  ) {
    this.onUrlChanged();
  }

  /*public user: User = {
    name: 'TOni Oller',
    userName: 'pepito',
    profilePhoto:
      'https://recerca.upc.edu/bampla/en/Personnel/staff_members/Oller-Antoni/2008-01-08.4864239201/@@images/image.jpeg',
    surname: 'string',
    password: 'tring',
    email: 'toni.oller@upc.edu',
    phone: 'string',
    savedOffers: [],
    social: 'pan',
    birthDate: new Date(),
    id: '',
  };*/

  ngOnInit(): void {
    //this.getUsersByQuery()
    this.getDataFromService();
  }

  private onUrlChanged(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.users= [];
        this.getUsersByQuery();
      });
  }

  private getUsersByQuery(): void {
    this.route.queryParams.pipe(take(1)).subscribe((params) => { this.query = params['q'] ;
      this.getDataFromService();
    });
  }

  private getDataFromService(): void {
    this.userSvc
      .searchUsers(this.query).pipe(take(1)).subscribe((res: any) => {

        if (res.code == "200") {
          //console.log(res.usersList)
    
          this.users = res.usersList;
          
        } else {
          this.users = [];
        }
      
  })
}

deleteUsers():void{

  /*if (selected.value == true){
    this.ids.concat()
  }*/

}

}
