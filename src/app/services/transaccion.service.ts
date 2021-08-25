import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Transaccion } from '../models/transaccion.model';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { TransaccionForm } from '../interfaces/cargar-transaccion.interface';
import { Usuario } from '../models/usuario.model';

const base_url = environment.base_url;


@Injectable({
  providedIn: 'root'
})
export class TransaccionService {


  constructor( private http: HttpClient) { }

  get token(): string {
    return localStorage.getItem('token') || '';
    }

    get headers(): any {
    return {
     headers: {
     'x-token': this.token
      }
    };
    }

crearTransaccion( formData: TransaccionForm ): any {
  return this.http.post(`${base_url}/transacciones`, formData);
}

cargarTransaccion(): any {
  const url = `${base_url}/transacciones`;
  return this.http.get(url, this.headers)
  .pipe(
    map( (resp: any) => resp.transacciones )
    );
  }

  cargarTransaccionxId(transaccion: Transaccion): any {
    const url = `${base_url}/transacciones/${ transaccion.usuario.uid }`;
    return this.http.get(url, this.headers)
    .pipe(
      map( (resp: any) => resp.transacciones )
      );
    }

  eliminarTransaccion( transaccion: Transaccion ): any {

  const url = `${ base_url }/transacciones/usuario/${ transaccion.uid }`;
  return this.http.delete( url, this.headers );
}

obetenerVentaMes(): Observable<any> {

  // const d = Date.now();
  // const fecha1 = moment(d).format('YYYY-MM-DD');
  // console.log(fecha1);
  const url = `${base_url}/transacciones/transaccionesMes`;
  return this.http.get(url, this.headers);
}

obetenerVentaDia(): Observable<any> {

  const d = Date.now();
  const fecha1 = moment(d).format('YYYY-MM-DD');
  const url = `${base_url}/transacciones/transaccionesDia?fecha=` + fecha1;
  return this.http.get(url, this.headers);
  }
}
