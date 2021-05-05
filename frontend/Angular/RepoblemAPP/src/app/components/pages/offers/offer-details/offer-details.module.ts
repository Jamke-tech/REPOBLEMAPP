import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferDetailsRoutingModule } from './offer-details-routing.module';
import { OfferDetailsComponent } from './offer-details.component';


@NgModule({
  declarations: [OfferDetailsComponent],
  imports: [
    CommonModule,
    OfferDetailsRoutingModule
  ]
})
export class OfferDetailsModule { }
