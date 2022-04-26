import { environment } from 'src/environments/environment.prod';
import { Ordens } from './../model/Ordens';
import { OrdemsService } from './../service/ordems.service';
import { ClientesService } from './../service/clientes.service';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  listaOrdens: Ordens[]

  constructor(
    private auth: AuthService,
    private clientes: ClientesService,
    private ordens: OrdemsService
  ) { }

  ngOnInit() {
    this.ordens.refreshToken()
    window.scroll(0,0)
    this.getOrdens()
  }

  getOrdens(){
    this.ordens.getAll().subscribe((resp: Ordens[]) => {
      this.listaOrdens = resp
    })
  }

}
