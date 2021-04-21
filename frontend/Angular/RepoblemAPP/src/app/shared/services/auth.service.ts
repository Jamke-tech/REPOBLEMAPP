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

  loginFunction(username:string, password:string){
    return this.http.post<User>(`${environment.baseUrlAPI}/admin/login`,{username,password});
  }

  updateUser(id: string) {
    return this.http.put<User>(`${environment.baseUrlAPI}/user/${id}`, id);
  }

  registerUser(userName: string, name: string,surname: string, password: string, email: string, phone: string,profilePhoto: string,birthDate: Date) {
    return this.http.post<User>(`${environment.baseUrlAPI}/completeUser`,
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
  getDetails(id:number):Observable<User>{
    return this.http.get<User>(`http://localhost:25000/api/getUser/${id}`);  
  }

  /*setToken(token: any): void {
    localStorage.setItem("accessToken", token);
  }
*/


  
  searchUsers(query = ''):Observable<User[]> {
    return this.http.get<User[]>(`${environment.baseUrlAPI}/user`);
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
