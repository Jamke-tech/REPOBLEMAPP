import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferModificationRoutingModule } from './offer-modification-routing.module';
import { OfferModificationComponent } from './offer-modification.component';


@NgModule({
  declarations: [OfferModificationComponent],
  imports: [
    CommonModule,
    OfferModificationRoutingModule
  ]
})
export class OfferModificationModule { }
