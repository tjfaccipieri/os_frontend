import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class OrdemsService {

  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authentization', environment.token),
  };

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authentization', environment.token),
    };
  }

  
}
