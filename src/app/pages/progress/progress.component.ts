import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { Transaccion } from '../../models/transaccion.model';
import * as moment from 'moment';


@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  progreso = 7000;
  public usuario: Usuario;

  constructor() {}



get getPrecio(): number {
  return this.progreso;
}

  cambiaValor(valor: number): number {

if (this.progreso >= 10000 && valor >= 0) {
  return this.progreso = 10000;
}

if (this.progreso <= 0 && valor < 0) {
  return this.progreso = 0;
}

this.progreso = this.progreso + valor;
}

get hoy(): any {
   return Date.now();
 }

get user(): any {
  return this.usuario.uid;
  }

}

