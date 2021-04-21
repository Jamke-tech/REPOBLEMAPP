import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  loginFunction(userName:string, password:string): Observable<any>{
    return this.http.post(`${environment.baseUrlAPI}/admin/login`,{userName,password});
  }

  updateUser(id: string,userName: string, name: string,surname: string, email: string, phone: string,birthDate: Date): Observable<any> {
    return this.http.put(`${environment.baseUrlAPI}/user/${id}`, 
    
    {
      userName: userName,
      name: name,
      surname: surname,
      email: email,
      phone: phone,
      birthDate: birthDate
    });
  }

  registerUser(userName: string, name: string,surname: string, password: string, email: string, phone: string,profilePhoto: string,birthDate: Date):Observable<any> {
    return this.http.post(`${environment.baseUrlAPI}/user`,
        {
          userName: userName,
          name: name,
          surname: surname,
          password: password,
          email: email,
          phone: phone,
          profilePhoto: profilePhoto,
          birthDate: birthDate
        });
  }

  setUser(user: User): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }
  getDetails(id:number):Observable<any>{
    return this.http.get(`${environment.baseUrlAPI}/getUser/${id}`);  
  }

  /*setToken(token: any): void {
    localStorage.setItem("accessToken", token);
  }
*/
  
  searchUsers(query = ''):Observable<any> {
    return this.http.get(`${environment.baseUrlAPI}/users`);
  }
  
  /*
  searchCharacters(query = ''):Observable<User[]> {
    return this.http.get<User[]>(`${environment.baseUrlAPI}/`);

  getDetails(id:number):Observable<User>{
    return this.http.get<User>(`${environment.baseUrlAPI}/user/${id}`);  
  }
/*
  updateUser() {
    return this.http.post<User>(`${environment.baseUrlAPI}/`);
  }
*/
  deleteUserB(id:string):Observable<any>{
    return this.http.delete(`${environment.baseUrlAPI}/user/${id}`);
  }

}
