import { NotfoundComponent } from './notfound/notfound.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { CadClienteComponent } from './cliente/cad-cliente/cad-cliente.component';
import { ListaClientesComponent } from './cliente/lista-clientes/lista-clientes.component';
import { DetalheClienteComponent } from './cliente/detalhe-cliente/detalhe-cliente.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'cadCliente', component: CadClienteComponent},
  {path: 'clientes', component: ListaClientesComponent},
  {path: 'cliente/:id', component: DetalheClienteComponent},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
