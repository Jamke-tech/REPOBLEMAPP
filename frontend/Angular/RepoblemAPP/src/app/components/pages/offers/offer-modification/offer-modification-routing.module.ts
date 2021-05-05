import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferModificationComponent } from './offer-modification.component';

const routes: Routes = [{ path: '', component: OfferModificationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferModificationRoutingModule { }
