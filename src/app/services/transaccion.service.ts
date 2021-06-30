import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Transaccion } from '../models/transaccion.model';
import { Observable } from 'rxjs';
import * as moment from 'moment';

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


cargarTransaccion(): any {
  const url = `${base_url}/transacciones`;
  return this.http.get(url, this.headers)
  .pipe(
    map( (resp: any) => resp.transacciones )
    );
  }

  eliminarTransaccion( transaccion: Transaccion ): any {

  const url = `${ base_url }/transacciones/${ transaccion.uid }`;
  return this.http.delete( url, this.headers );
}


obetenerPromMensual(): Observable<any> {

  const d = Date.now();
  const fecha1 = moment(d).format();
  const url = `${base_url}/transacciones/transaccionesMes?fecha=` + fecha1;
  return this.http.get(url, this.headers);
  }


}
  // const url = `${ base_url }/transaccionesMes`;
  // return this.http.get(url, fecha1, {'headers': this.headers});

// cargarPromedio(): any {
//   const url = `${base_url}/transacciones`;
//   return this.http.get(console.log();
//   )
  // return this.http.get(url, this.headers)
  // .pipe(
  //   map( (resp: any) => resp.transacciones.monto )
  //   );
 // }


