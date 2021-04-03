import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { UsersListComponent } from '../users/users-list/users-list.component';
import { UsersDetailsComponent } from '../users/users-details/users-details.component';
import { UsersComponent } from '../users/users.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const myComponents = [
    UsersDetailsComponent, 
    UsersListComponent, 
    UsersComponent,
];

@NgModule({
  declarations: [...myComponents],
  imports: [CommonModule, RouterModule],
  exports: [...myComponents],
})
export class UsersModule {}