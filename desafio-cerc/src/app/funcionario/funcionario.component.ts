import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Cargo } from '../model/Cargo';
import { FolhaDePagamentoDTO } from '../model/FolhaDePagamentoDTO';
import { Funcionario } from '../model/Funcionario';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { CargoService } from '../service/cargo.service';
import { FolhaService } from '../service/folha.service';
import { FuncionarioService } from '../service/funcionario.service';
@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css'],
})


export class FuncionarioComponent implements OnInit {
  funcionario: Funcionario = new Funcionario()
  listaFuncionarios: Funcionario[]
  idFuncionario: number
  linkFoto: string

  cargo: Cargo = new Cargo()
  listaCargos: Cargo[]
  nome: string
  idCargo: number
  idDelete: number

  folhaPagamento: FolhaDePagamentoDTO = new FolhaDePagamentoDTO()
  listaFolhas: FolhaDePagamentoDTO[]
  /* idFunc: number */

  user: Usuario = new Usuario();
  idUser = environment.id;
  fotoFuncionario = environment.linkFoto

  constructor(
    private router: Router,
    public auth: AuthService,
    private cargoService: CargoService,
    public funcionarioService: FuncionarioService,
    private folhaService: FolhaService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);

    this.auth.refreshToken();
    this.cargoService.refreshToken();
    this.funcionarioService.refreshToken();
    this.folhaService.refreshToken();

    if (environment.token == '') {
      // alert('Sua sessão expirou, faça o login novamente!')
      this.router.navigate(['/entrar']);
    }

    this.getAllCargos();
    this.getAllFuncionarios();

    this.findByIdUser(this.idUser)

  }

  findByIdUser(id: number){
    /* console.log(id) */
    this.auth.getByIdUser(id).subscribe((resp: Usuario) => {
      this.user = resp
    })
  }

  getAllCargos() {
    this.cargoService.getAllCargos().subscribe((resp: Cargo[]) => {
      this.listaCargos = resp;
      /* console.log(resp) */
    });
  }

  findByIdCargo(){
    this.cargoService.getByIdCargo(this.idCargo).subscribe((resp: Cargo) => {
      this.cargo = resp
    })
  }

  cadastrarCargo() {
    this.cargoService.postCargo(this.cargo).subscribe((resp: Cargo) => {
      this.cargo = resp;
      alert('Cargo cadastrado com sucesso!');
      this.getAllCargos();
      this.cargo = new Cargo();
    });
  }

  getAllFuncionarios(){
    this.funcionarioService.getAllFuncionarios().subscribe((resp: Funcionario[]) => {
      this.listaFuncionarios = resp
      console.log(resp)
    })
  }

  cadastrarFuncionario() {
    console.log(this.funcionario);

    this.user.idUsuario = this.idUser
    this.funcionario.usuario = this.user

    this.cargo.idCargo = this.idCargo
    this.funcionario.cargo = this.cargo

    this.folhaPagamento.funcId = this.idCargo
    this.funcionario.folhaDePagamento = this.folhaPagamento

    console.log(this.idCargo)
    console.log(this.idFuncionario)
    console.log(this.folhaPagamento)
    console.log(this.funcionario.folhaDePagamento)

    this.user.linkFoto = this.linkFoto

    /* console.log(this.cargo)
    console.log(this.idCargo) */

    if(this.funcionario.linkFoto == null || this.funcionario.linkFoto == ''){
      this.funcionario.linkFoto = "/assets/img/user.png"
    }

    this.folhaService.postFolha(this.funcionario.folhaDePagamento).subscribe((resp: FolhaDePagamentoDTO) => {
      this.funcionario.folhaDePagamento = resp;
      console.log(resp)
      this.funcionario.folhaDePagamento = new FolhaDePagamentoDTO();
      console.log(this.funcionario);
      this.funcionario.folhaDePagamento = this.folhaPagamento
      /* this.folhaPagamento.funcId = this.idFuncionario */
      /* this.getAllFolhas(); */
    });

    /* this.cadastrarFolha() */

    this.funcionarioService
      .postFuncionario(this.funcionario)
      .subscribe((resp: Funcionario) => {
        this.funcionario = resp;
        console.log(this.funcionario)
        alert('Funcionário cadastrado com sucesso!');
        this.funcionario = new Funcionario();
        this.funcionario.cargo = this.cargo
        console.log(this.cargo)

        this.getAllFuncionarios();
      });
  }

  findByIdFuncionario(idFuncionario: number){
    console.log(idFuncionario)
    alert('Deseja editar as informações de horas desse funcionário?')
    this.funcionarioService.getByIdFuncionario(idFuncionario).subscribe((resp: Funcionario) => {
      /* this.funcionario.idFuncionario = idFuncionario */
      this.funcionario = resp
      console.log(resp)
    })
  }

  /* findByIdFuncionario(idFuncionario: number){
    console.log(idFuncionario)
    alert('Deseja editar as informações de horas desse funcionário?')
    this.folhaService.getByIdFuncionario(idFuncionario).subscribe((resp: FolhaDePagamentoDTO) => {
      this.folhaPagamento.funcId = idFuncionario
      this.folhaPagamento = resp
      console.log(resp)
    })
  } */

  getAllFolhas() {
    this.folhaService.getAllFolhas().subscribe((resp: FolhaDePagamentoDTO[]) => {
      this.listaFolhas = resp;
      console.log(resp)
    });
  }

  cadastrarFolha() {

    this.folhaService.postFolha(this.folhaPagamento).subscribe((resp: FolhaDePagamentoDTO) => {
      this.folhaPagamento = resp;
      console.log(resp)
      this.folhaPagamento = new FolhaDePagamentoDTO();
      this.funcionario.folhaDePagamento = this.folhaPagamento
      this.folhaPagamento.funcId = this.idFuncionario
      this.getAllFolhas();
    });
  }

}
