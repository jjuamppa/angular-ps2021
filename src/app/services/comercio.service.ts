import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Comercio } from '../models/comercio.model';
import { Solicitud } from '../models/solicitud.model';
import { SolicitudForm } from '../interfaces/cargar-solicitud.interface';
import { CargarComercio } from '../interfaces/cargar-comercio.interface';
import { CargarSolicitud2 } from '../interfaces/cargar-solicitud2.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ComercioService {



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


//      cargarComercios(): any {
//        const url = `${base_url}/comercios`;
//        return this.http.get(url, this.headers)
//                   .pipe(
//                   map( (resp: any) => resp.comercios )
// );
// }

crearComercio( nombre: string ): any {
  const url = `${ base_url }/comercios`;
  return this.http.post( url, { nombre}, this.headers );
}

cargarComercios(desde: number = 0): any {
  const url = `${base_url}/comercios?desde=${ desde }`;
  return this.http.get<CargarComercio>(url, this.headers);
 }

 actualizarComercio( uid: string, nombre: string, email: string, direccion: string, telefono: string ): any {
  const url = `${ base_url }/comercios/${ uid }`;
  return this.http.put( url, { nombre, email, direccion, telefono }, this.headers );
}

 eliminarComercio( comercio: Comercio ): any {

  const url = `${ base_url }/comercios/${ comercio.uid }`;
  return this.http.delete( url, this.headers );
}

// cargarSolicitudes(): any {
//   const url = `${base_url}/solicitudes`;
//   return this.http.get(url)
//              .pipe(
//              map( (resp: any) => resp.solicitudes )
// );
// }

cargarSolicitudes(desde: number = 0): any {
  const url = `${base_url}/solicitudes?desde=${ desde }`;
  return this.http.get<CargarSolicitud2>(url, this.headers);
 }


eliminarSolicitud( solicitud: Solicitud ): any {

  const url = `${ base_url }/solicitudes/${ solicitud.uid }`;
  return this.http.delete(url);
}

crearSolicitud( formData: SolicitudForm ): any {
  return this.http.post(`${base_url}/solicitudes`, formData);
}

actualizarSolicitud( uid: string, nombre: string, email: string, direccion: string, telefono: string ): any {
  const url = `${ base_url }/solicitudes/${ uid }`;
  return this.http.put( url, { nombre, email, direccion, telefono }, this.headers );
}

}


