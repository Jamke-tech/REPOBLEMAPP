import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http: HttpClient) { }

  getOffers(query = ''):Observable <any> {
    return this.http.get(`${environment.baseUrlAPI}/offers`)
  }

  getOfferDet(id:string):Observable<any>{
    return this.http.get(`${environment.baseUrlAPI}/offer/${id}`)
  }
}
