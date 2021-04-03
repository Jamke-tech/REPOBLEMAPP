import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersModificationComponent } from './users-modification.component';

const routes: Routes = [{ path: '', component: UsersModificationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersModificationRoutingModule { }
