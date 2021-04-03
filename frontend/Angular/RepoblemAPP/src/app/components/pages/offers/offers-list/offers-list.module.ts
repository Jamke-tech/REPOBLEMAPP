import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersListRoutingModule } from './offers-list-routing.module';
import { OffersListComponent } from './offers-list.component';


@NgModule({
  declarations: [OffersListComponent],
  imports: [
    CommonModule,
    OffersListRoutingModule
  ]
})
export class OffersListModule { }
