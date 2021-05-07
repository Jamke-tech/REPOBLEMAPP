import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferCreationRoutingModule } from './offer-creation-routing.module';
import { OfferCreationComponent } from './offer-creation.component';


@NgModule({
  declarations: [OfferCreationComponent],
  imports: [
    CommonModule,
    OfferCreationRoutingModule
  ]
})
export class OfferCreationModule { }
