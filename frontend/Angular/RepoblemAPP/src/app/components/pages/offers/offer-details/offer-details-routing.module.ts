import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferDetailsComponent } from './offer-details.component';

const routes: Routes = [{ path: '', component: OfferDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferDetailsRoutingModule { }
