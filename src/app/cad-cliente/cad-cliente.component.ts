import { Component, OnInit } from '@angular/core';
import { Clientes } from '../model/Clientes';
import { ClientesService } from '../service/clientes.service';

@Component({
  selector: 'app-cadCliente',
  templateUrl: './cad-cliente.component.html',
  styleUrls: ['./cad-cliente.component.css']
})
export class CadClienteComponent implements OnInit {

  cliente: Clientes = new Clientes()

  constructor(private cadCliente: ClientesService) { }

  ngOnInit() {
  }

  cadastrarCliente(){
    this.cadCliente.cadCliente(this.cliente).subscribe((resp: Clientes) => {
      this.cliente = resp;
      alert('Cliente cadastrado')
    })
  }

}
