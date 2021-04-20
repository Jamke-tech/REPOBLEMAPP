import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.interface';

@Component({
  selector: 'app-users-modification',
  templateUrl: './users-modification.component.html',
  styleUrls: ['./users-modification.component.css']
})
export class UsersModificationComponent implements OnInit {

  @Input() user!:User;
  constructor() { }


  ngOnInit(): void {
  }

}
