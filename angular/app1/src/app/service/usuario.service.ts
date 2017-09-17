import { Injectable, OnInit } from '@angular/core';
import { Headers, Http, RequestOptions } from "@angular/http";

// import { HttpInterceptor } from "../service/http.interceptor";

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Usuario } from "../model/usuario";
import { Configuracion } from "../config/config";

@Injectable()
export class UsuarioService implements OnInit {
  urlBase: string = Configuracion.urlBase;
  headers: Headers;

  constructor(private http: Http) { }

  ngOnInit() {

  }

  /** getHeaderArmado(): RequestOptions {
     this.headers = new Headers();
     this.headers.append('Content-Type', 'application/json');
     this.headers.append('authorization', sessionStorage.getItem("jwt"));
 
     let options = new RequestOptions({ headers: this.headers });
     return options;
   }
   */

  login(usuario: Usuario): Promise<Response> {
    return this.http.post("login", JSON.stringify({ "username": usuario.login, "password": usuario.clave }))
      .toPromise()
      .then(response => {
        return response;
      })
      .catch(this.handleError);
  }

  getUsuarios(): Promise<Object[]> {
    return this.http.get("users")
      .toPromise()
      .then(response => {
        alert(JSON.stringify(response.json().users));
        return response.json().users;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }


  public loginObservable(usuario: Usuario): Observable<Object> {
    return this.http.post("login", JSON.stringify({ "username": usuario.login, "password": usuario.clave })).map(res => res.headers);
  }


}
