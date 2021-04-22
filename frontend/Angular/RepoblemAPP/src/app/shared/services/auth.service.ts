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

  updateUser(id: string,userName: string, name: string,surname: string, email: string, profilePhoto:string, phone: string,birthDate: Date): Observable<any> {
    return this.http.put(`${environment.baseUrlAPI}/user/${id}`, 
    
    {
      userName: userName,
      name: name,
      surname: surname,
      email: email,
      profilePhoto: profilePhoto,
      phone: phone,
      birthDate: birthDate
    });
  }

  registerUser(userName: string, name: string,surname: string, password: string, email: string, phone: string,birthDate: Date, photoFile: any):Observable<any> {
    
    var formData: any = new FormData();
    formData.append("image", photoFile);
    formData.append("userName",userName);
    formData.append("name",name);
    formData.append("surname",surname);
    formData.append("password",password);
    formData.append("email",email);
    formData.append("phone",phone);
    formData.append("birthDate",birthDate);

    return this.http.post(`${environment.baseUrlAPI}/user`, formData);
  }

  setUser(user: User): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }
  getDetails(id:string):Observable<any>{
    return this.http.get(`${environment.baseUrlAPI}/user/${id}`);  
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
