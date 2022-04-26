import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Ordens } from '../model/Ordens';

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

  getAll(): Observable<Ordens[]>{
    return this.http.get<Ordens[]>(`${environment.api}/ordens`, this.token)
  }

  getById(id: number): Observable<Ordens>{
    return this.http.get<Ordens>(`${environment.api}/ordens/${id}`, this.token)
  }

  getByDescricao(descricao: string): Observable<Ordens>{
    return this.http.get<Ordens>(`${environment.api}/ordens/descricao/${descricao}`, this.token)
  }

  postOrdem(ordem: Ordens): Observable<Ordens>{
    return this.http.post<Ordens>(`${environment.api}/ordens`, ordem, this.token)
  }

  putOrdem(ordem: Ordens): Observable<Ordens>{
    return this.http.put<Ordens>(`${environment.api}/ordens`, ordem, this.token)
  }

  deleteOrdem(id: number){
    return this.http.delete(`${environment.api}/ordems/${id}`, this.token)
  }
}
