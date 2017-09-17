import { Component, OnInit } from '@angular/core';

import { UsuarioService } from "../../service/usuario.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './app-inicio.component.html',
  styleUrls: ['./app-inicio.component.css']
})
export class AppInicioComponent implements OnInit {

  autorizacion: string;
  usuarios: Object[];

  constructor(private service: UsuarioService) { }

  ngOnInit() {
    this.autorizacion = sessionStorage.getItem("jwt");
  }

  getUsuarios(): void {
    this.service.getUsuarios().then(response => {
      this.usuarios = response as Object[];
    })
      .catch(error => alert(error));
  }

}
