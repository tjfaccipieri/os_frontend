import { Clientes } from './../model/Clientes';
import { OrdemsService } from './../service/ordems.service';
import { ClientesService } from './../service/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

declare var require: any;

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

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

  @ViewChild('pdfTable')
  pdfTable!: ElementRef;

  gerarPDF(){
    const pdf = (<HTMLDivElement>document.querySelector('#pdf'))
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download();

  }

}
