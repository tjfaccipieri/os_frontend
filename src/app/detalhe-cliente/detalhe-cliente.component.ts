import { Clientes } from './../model/Clientes';
import { OrdemsService } from './../service/ordems.service';
import { ClientesService } from './../service/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-detalhe-cliente',
  templateUrl: './detalhe-cliente.component.html',
  styleUrls: ['./detalhe-cliente.component.css']
})
export class DetalheClienteComponent implements OnInit {

  cliente: Clientes = new Clientes()

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clienteService: ClientesService,
    private ordemServide: OrdemsService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    if(environment.token == ''){
      this.router.navigate(['/login']);
    }

    let idCliente = this.route.snapshot.params['id']
    this.buscarClientePorId(idCliente)
  }

  buscarClientePorId(id: number) {
    this.clienteService.getById(id).subscribe((resp: Clientes) => {
      this.cliente = resp
    })
  }

}
