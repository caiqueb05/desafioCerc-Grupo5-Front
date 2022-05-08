import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { FolhaDePagamentoDTO } from '../model/FolhaDePagamentoDTO';
import { Funcionario } from '../model/Funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Autorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  getAllFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(
      'https://paymentsregister.herokuapp.com/api/v1/funcionario',
      this.token
    );
  }

  postFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(
      'https://paymentsregister.herokuapp.com/api/v1/funcionario',
      funcionario,
      this.token
    );
  }

  getByIdFuncionario(id: number): Observable<Funcionario>{
    return this.http.get<Funcionario>(`https://paymentsregister.herokuapp.com/api/v1/funcionario/${id}`, this.token)
  }

}
