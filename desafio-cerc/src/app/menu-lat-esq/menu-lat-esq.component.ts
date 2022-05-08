import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Cargo } from '../model/Cargo';
import { Funcionario } from '../model/Funcionario';
import { AuthService } from '../service/auth.service';
import { CargoService } from '../service/cargo.service';
import { FuncionarioService } from '../service/funcionario.service';

@Component({
  selector: 'app-menu-lat-esq',
  templateUrl: './menu-lat-esq.component.html',
  styleUrls: ['./menu-lat-esq.component.css'],
})
export class MenuLatEsqComponent implements OnInit {
  cargo: Cargo = new Cargo();
  listaCargos: Cargo[];
  idCargo: number;

  listaFuncionarios: Funcionario[]

  constructor(
    public cargoService: CargoService,
    public funcionarioService: FuncionarioService,
    public auth: AuthService,
    private router: Router
    ) {}

  ngOnInit() {
    window.scroll(0, 0)

    this.auth.refreshToken()
    this.cargoService.refreshToken()
    this.funcionarioService.refreshToken()

    if(environment.token == ''){
      // alert('Sua sessão expirou, faça o login novamente!')
      this.router.navigate(['/entrar'])

      this.funcionarioService.getAllFuncionarios()
    }

  }

  getAllFuncionarios(){
    this.funcionarioService.getAllFuncionarios().subscribe((resp: Funcionario[]) => {
      this.listaFuncionarios = resp
    })
  }

}
