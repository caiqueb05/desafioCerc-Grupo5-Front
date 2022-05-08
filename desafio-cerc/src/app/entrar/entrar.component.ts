import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CredenciaisDTO } from '../model/CredenciaisDTO';
import { AuthService } from '../service/auth.service';
import { CargoService } from '../service/cargo.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin: CredenciaisDTO = new CredenciaisDTO

  constructor(
    private auth: AuthService,
    private router: Router,
    private cargoService: CargoService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    this.auth.refreshToken()
    this.cargoService.getAllCargos()
  }

  entrar(){
    this.auth.entrar(this.userLogin).subscribe((resp: CredenciaisDTO) =>  {
      this.userLogin = resp

      /* console.log(this.userLogin) */

      environment.token = this.userLogin.token
      environment.nome = this.userLogin.nome
      environment.id = this.userLogin.idUsuario
      environment.linkFoto = this.userLogin.linkFoto
      environment.cargo = this.userLogin.cargo

      this.router.navigate(['/home'])
    }, (erro: { status: number; }) =>{
      if(erro.status == 500){
        alert('Usuário ou senha estão incorretos!')
      }
    })
  }

}
