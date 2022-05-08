import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Cargo } from '../model/Cargo';
import { AuthService } from '../service/auth.service';
import { CargoService } from '../service/cargo.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  listaCargos: Cargo[]

  nome = environment.nome
  foto = environment.linkFoto
  cargo = environment.cargo

  constructor(
    private router: Router,
    public authService: AuthService,
    public cargoService: CargoService
  ) { }

  ngOnInit() {

    window.scroll(0,0)

    if(environment.token == ''){
      // alert('Sua sessão expirou, faça o login novamente!')
      this.router.navigate(['/entrar'])
    }

    this.authService.refreshToken()
    this.cargoService.getAllCargos()

  }

}
