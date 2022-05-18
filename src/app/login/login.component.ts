import { AuthService } from './../service/auth.service';
import { UsuarioLogin } from './../model/UsuarioLogin';
import { Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UsuarioLogin = new UsuarioLogin()

  entrarTxt: string = "Entrar"

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logar(){
    this.entrarTxt = 'Carregando'
    this.auth.logar(this.user).subscribe({
      next: (resp: UsuarioLogin) =>{
        this.user = resp;

        environment.id = this.user.id
        environment.nome = this.user.nome
        environment.usuario = this.user.usuario
        environment.token = this.user.token

        this.router.navigate(['/inicio'])
        this.entrarTxt = "Entrar"
      },
      error: err => {
        if (err.status == 401){
          alert('Usuário/Senha inválidos')
          this.entrarTxt = "Entrar"
        };
        if(err.status == 500) {
          alert('Preencha todos os dados')
          this.entrarTxt = "Entrar"
        }
      }
    })
  }

}
