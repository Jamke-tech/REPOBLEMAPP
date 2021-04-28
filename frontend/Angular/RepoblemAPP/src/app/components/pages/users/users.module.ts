import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsersListComponent } from '../users/users-list/users-list.component';
import { UsersDetailsComponent } from '../users/users-details/users-details.component';
import { UsersComponent } from '../users/users.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';

const myComponents = [
  UsersDetailsComponent,
  UsersListComponent,
  UsersComponent,
];

@NgModule({
  declarations: [...myComponents],
  imports: [CommonModule, RouterModule, MaterialModule,FormsModule],
  exports: [...myComponents],
})
export class UsersModule {}
