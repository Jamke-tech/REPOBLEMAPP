import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Offer } from 'src/app/shared/models/offer.interface';
import { OfferService } from 'src/app/shared/services/offer.service';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {

  offers: Offer[] = [];
  private query: string = '';

  constructor(private offerSvc: OfferService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.getOffersFromService();

  }


  getOffersFromService():void{

    this.offerSvc.getOffers(this.query).pipe(take(1)).subscribe((res:any) =>{
      
      if(res.code == "200"){
        this.offers = res.offersList;
      }
      else{
        this.offers = [];
      }
    })

  }
}
