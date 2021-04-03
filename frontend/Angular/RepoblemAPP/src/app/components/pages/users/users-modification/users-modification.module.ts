import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersModificationRoutingModule } from './users-modification-routing.module';
import { UsersModificationComponent } from './users-modification.component';


@NgModule({
  declarations: [UsersModificationComponent],
  imports: [
    CommonModule,
    UsersModificationRoutingModule
  ]
})
export class UsersModificationModule { }
