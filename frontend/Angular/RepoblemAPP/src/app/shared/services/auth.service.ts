import { Injectable } from '@angular/core';
import { User } from '../models/user.interface'
import { Observable } from 'rxjs'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

/*
  searchCharacters(query = ''):Observable<User[]> {
    return this.http.get<User[]>(`${environment.baseUrlAPI}/`);

  getDetails() {
    return this.http.get<User>(`${environment.baseUrlAPI}/${id}`);  
  }

  updateUser() {
    return this.http.post<User>(`${environment.baseUrlAPI}/`);
  }

  deleteUser(){
    return this.http.delete<User>(`${environment.baseUrlAPI}/`);
  }
*/
}
