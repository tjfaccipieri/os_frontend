import { Router } from '@angular/router';
import { ViacepService } from './../../service/viacep.service';
import { Component, OnInit } from '@angular/core';
import { Clientes } from '../../model/Clientes';
import { ClientesService } from '../../service/clientes.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-cadCliente',
  templateUrl: './cad-cliente.component.html',
  styleUrls: ['./cad-cliente.component.css']
})
export class CadClienteComponent implements OnInit {

  cliente: Clientes = new Clientes()

  constructor(private cadCliente: ClientesService, private cepService: ViacepService, private router: Router) { }

  ngOnInit() {
    if(environment.token === ''){
      this.router.navigate(['/login'])
    }

    this.cadCliente.refreshToken()
  }

  getCep(){
    if(this.cliente.cep.length >= 8) {
      this.cepService.getCep(this.cliente.cep).subscribe((resp: any) => {
        this.cliente.endRua = resp.logradouro
      })

    }
  }

  cadastrarCliente(){
    console.log(this.cliente)
    this.cadCliente.cadCliente(this.cliente).subscribe((resp: Clientes) => {
      this.cliente = resp;
      alert('Cliente cadastrado')
    })
  }

}
