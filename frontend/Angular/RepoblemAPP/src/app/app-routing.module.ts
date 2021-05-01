import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  
  },
  { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) }, 
  { path: 'login', loadChildren: () => import('./components/pages/users/login/login.module').then(m => m.LoginModule) }, 
  { path: 'register', loadChildren: () => import('./components/pages/users/register/register.module').then(m => m.RegisterModule) },
  { path: 'users-list', loadChildren: () => import('./components/pages/users/users-list/users-list.module').then(m => m.UsersListModule) },
  { path: 'offers-list', loadChildren: () => import('./components/pages/offers/offers-list/offers-list.module').then(m => m.OffersListModule) },
  { path: 'users-details/:id', loadChildren: () => import('./components/pages/users/users-details/users-details.module').then(m => m.UsersDetailsModule) },
  { path: 'users-modification/:id', loadChildren: () => import('./components/pages/users/users-modification/users-modification.module').then(m => m.UsersModificationModule) }];


 
@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
