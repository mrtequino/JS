import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from "../../model/usuario";
import { UsuarioService } from "../../service/usuario.service";

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private router: Router, private service: UsuarioService) { }

  ngOnInit() {
  }

  onIngresar(): void {
    this.service.login(this.usuario)
      .then(response => {
        sessionStorage.setItem("jwt", response.headers.get('Authorization'));
        alert(sessionStorage.getItem("jwt"));
        this.router.navigate(['/app-inicio']);
      })
      .catch(error => { alert("error controlado:" + error) })
  }

  onIngresarObservable(): void {
    this.service.loginObservable(this.usuario)
      .subscribe(
      (data: Object) => { alert("correcto: " + data) },
      (error: any) => { alert("error: " + JSON.stringify(error)) },
      () => { alert('completo') }
      );
  }

}
