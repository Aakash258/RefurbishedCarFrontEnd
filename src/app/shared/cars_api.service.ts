import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seller_login } from '../Models/login_model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:8080/refurbished/";

  getUsers(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}showcars`);
  }

  checkLoginCreds(seller_login: Seller_login): Observable<any>{
    return this.http.post(`${this.baseUrl}checkLoginCreds`,seller_login);
  }

}
