import { Router } from '@angular/router';
import { ClientesService } from './../../service/clientes.service';
import { Clientes } from './../../model/Clientes';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  listaClientes: Clientes[]

  constructor(
    private clientes: ClientesService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/login']);
    }

    this.listarClientes()
  }

  listarClientes() {
    this.clientes.getAll().subscribe((resp: Clientes[]) => {
      this.listaClientes = resp
      this.listaClientes.sort((a,b) => a.id - b.id)
    })
  }

}
