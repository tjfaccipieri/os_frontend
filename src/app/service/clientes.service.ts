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
    headers: new HttpHeaders().set('Authentization', environment.token),
  };

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authentization', environment.token),
    };
  }

  getAll(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(`${environment.api}/clientes`);
  }

  getById(id: number): Observable<Clientes> {
    return this.http.get<Clientes>(`${environment.api}/clientes/${id}`);
  }

  getByNome(nome: string): Observable<Clientes> {
    return this.http.get<Clientes>(`${environment.api}/clientes/nome/${nome}`);
  }

  getByCEP(cep: string): Observable<Clientes> {
    return this.http.get<Clientes>(`${environment.api}/clientes/cep/${cep}`);
  }

  cadCliente(cliente: Clientes): Observable<Clientes>{
    return this.http.post<Clientes>(`${environment.api}/clientes`, cliente)
  }

  editCliente(cliente: Clientes): Observable<Clientes>{
    return this.http.put<Clientes>(`${environment.api}/clientes`, cliente)
  }

  deleteCliente(id: number){
    return this.http.delete(`${environment.api}/clientes/${id}`)
  }
}
