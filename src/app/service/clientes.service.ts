import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Clientes } from '../model/Clientes';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  getAll(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(`${environment.api}/clientes`, this.token);
  }

  getById(id: number): Observable<Clientes> {
    return this.http.get<Clientes>(`${environment.api}/clientes/${id}`, this.token);
  }

  getByNome(nome: string): Observable<Clientes> {
    return this.http.get<Clientes>(`${environment.api}/clientes/nome/${nome}`, this.token);
  }

  getByCEP(cep: string): Observable<Clientes> {
    return this.http.get<Clientes>(`${environment.api}/clientes/cep/${cep}`, this.token);
  }

  cadCliente(cliente: Clientes): Observable<Clientes> {
    return this.http.post<Clientes>(`${environment.api}/clientes`, cliente, this.token);
  }

  editCliente(cliente: Clientes): Observable<Clientes> {
    return this.http.put<Clientes>(`${environment.api}/clientes`, cliente, this.token);
  }

  deleteCliente(id: number) {
    return this.http.delete(`${environment.api}/clientes/${id}`, this.token);
  }
}
