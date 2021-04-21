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

  updateUser(id: string) {
    return this.http.put<User>(`${environment.baseUrlAPI}/user/${id}`, id);
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
  deleteUserB(id:number){
    return this.http.delete<User>(`${environment.baseUrlAPI}/user/${id}`);
  }

}
