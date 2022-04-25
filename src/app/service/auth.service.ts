import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { Observable } from 'rxjs';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${environment.api}/usuarios`)
  }

  getById(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`${environment.api}/usuarios/${id}`)
  }

  logar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>(`${environment.api}/usuarios/logar`, usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(`${environment.api}/usuarios/cadastrar`, usuario)
  }

  editar(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(`${environment.api}/usuarios/atualizar`, usuario)
  }

  logado(){
    let ok: boolean = false
    if(environment.token != '') {
      ok = true
    }
    return ok
  }
}
