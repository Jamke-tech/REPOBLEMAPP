import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { OfferService } from 'src/app/shared/services/offer.service';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {

  offer : any;
  constructor(private router: Router, private offerSvc: OfferService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  getOfferDetails():void{
    this.route.params.pipe(take(1)).subscribe((params)=>{
      
      const id = params['id'];

      this.offerSvc.getOfferDet(id).subscribe(data =>{

        if (data.code == "200"){

          this.offer = data.offer;
          
        }
        else{

        }

      });
    });
  }


  tornar(){
    this.router.navigate(['/users-list']);
  }
}
