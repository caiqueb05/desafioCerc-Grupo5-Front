import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { FolhaDePagamentoDTO } from '../model/FolhaDePagamentoDTO';

@Injectable({
  providedIn: 'root'
})
export class FolhaService {

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

  getAllFolhas(): Observable<FolhaDePagamentoDTO[]>{
    return this.http.get<FolhaDePagamentoDTO[]>('https://paymentsregister.herokuapp.com8080/api/v1/folha/todas', this.token)
  }

  postFolha(folha: FolhaDePagamentoDTO): Observable<FolhaDePagamentoDTO>{
    return this.http.post<FolhaDePagamentoDTO>('https://paymentsregister.herokuapp.com8080/api/v1/folha', folha, this.token)
  }

  /* getByIdFuncionario(id: number): Observable<FolhaDePagamentoDTO>{
    return this.http.get<FolhaDePagamentoDTO>(`https://paymentsregister.herokuapp.com8080/api/v1/folha/${id}`, this.token)
  } */

}
