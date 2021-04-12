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

  setToken(token: any): void {
    localStorage.setItem("accessToken", token);
  }



  /*
  searchCharacters(query = ''):Observable<User[]> {
    return this.http.get<User[]>(`${environment.baseUrlAPI}/`);

  getDetails(id:number):Observable<User>{
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
