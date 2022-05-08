import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { CredenciaisDTO } from '../model/CredenciaisDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  entrar(userLoginDTO: CredenciaisDTO): Observable<CredenciaisDTO> {
    return this.http.put<CredenciaisDTO>(
      'https://paymentsregister.herokuapp.com/api/v1/usuario/credenciais',
      userLoginDTO
    );
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(
      'https://paymentsregister.herokuapp.com//api/v1/usuario/salvar',
      usuario
    );
  }

  getByIdUser(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(
      `http://localhost:8080/api/v1/usuario/${id}`,
      this.token
    );
  }

  logado() {
    let ok = false;

    if (environment.token != '') {
      ok = true;
    }

    return ok;
  }

  admin(){
    let ok: boolean = false;
    if (environment.tipoUser == 'adm'){
      ok = true;
    }
    return ok;
  }

}
