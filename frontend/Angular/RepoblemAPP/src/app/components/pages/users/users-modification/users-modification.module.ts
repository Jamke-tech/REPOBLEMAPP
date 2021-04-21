import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersModificationRoutingModule } from './users-modification-routing.module';
import { UsersModificationComponent } from './users-modification.component';
import { MaterialModule } from 'src/app/material.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [UsersModificationComponent],
  imports: [
    CommonModule,
    UsersModificationRoutingModule,
    MaterialModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class UsersModificationModule { }
