import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CadClienteComponent } from './cliente/cad-cliente/cad-cliente.component';
import { NgxMaskModule } from 'ngx-mask';
import { ListaClientesComponent } from './cliente/lista-clientes/lista-clientes.component';
import { DetalheClienteComponent } from './cliente/detalhe-cliente/detalhe-cliente.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ClienteComponent } from './cliente/cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    NavbarComponent,
    NotfoundComponent,
    ClienteComponent,
    CadClienteComponent,
    ListaClientesComponent,
    DetalheClienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
