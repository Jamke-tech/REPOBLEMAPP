import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferCreationComponent } from './offer-creation.component';

const routes: Routes = [{ path: '', component: OfferCreationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferCreationRoutingModule { }
