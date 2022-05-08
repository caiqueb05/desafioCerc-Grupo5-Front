import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Cargo } from '../model/Cargo';

@Injectable({
  providedIn: 'root',
})
export class CargoService {
  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  getByIdCargo(id: number): Observable<Cargo> {
    return this.http.get<Cargo>(
      `https://paymentsregister.herokuapp.com8080/api/v1/cargo/${id}`,
      this.token
    );
  }

  getAllCargos(): Observable<Cargo[]> {
    return this.http.get<Cargo[]>(
      'https://paymentsregister.herokuapp.com8080/api/v1/cargo/todos',
      this.token
    );
  }

  postCargo(Cargo: Cargo): Observable<Cargo> {
    return this.http.post<Cargo>(
      'https://paymentsregister.herokuapp.com8080/api/v1/cargo',
      Cargo,
      this.token
    );
  }
}
