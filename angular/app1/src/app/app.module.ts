import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

import { AppRoutingModule } from "./router/app-routing.module";

import { httpFactory } from "./util/http.factory";

import { UsuarioService } from "./service/usuario.service";

import { AppComponent } from './app.component';
import { AppInicioComponent } from './component/app-inicio/app-inicio.component';
import { AppLoginComponent } from './component/app-login/app-login.component';

@NgModule({
  declarations: [
    AppComponent,
    AppInicioComponent,
    AppLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [UsuarioService, { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions] }],
  bootstrap: [AppComponent]
})
export class AppModule { }
