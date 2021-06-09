import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Comercio } from '../models/comercio.model';
import { Solicitud } from '../models/solicitud.model';
import { SolicitudForm } from '../interfaces/cargar-solicitud.interface';

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


     cargarComercios(): any {
       const url = `${base_url}/comercios`;
       return this.http.get(url, this.headers)
                  .pipe(
                  map( (resp: any) => resp.comercios )
);
}
 eliminarComercio( comercio: Comercio ): any {

  const url = `${ base_url }/comercios/${ comercio.uid }`;
  return this.http.delete( url, this.headers );
}

cargarSolicitudes(): any {
  const url = `${base_url}/solicitudes`;
  return this.http.get(url)
             .pipe(
             map( (resp: any) => resp.solicitudes )
);
}

eliminarSolicitud( solicitud: Solicitud ): any {

  const url = `${ base_url }/solicitudes/${ solicitud.uid }`;
  return this.http.delete(url);
}

crearSolicitud( formData: SolicitudForm ): any {
  return this.http.post(`${base_url}/solicitudes`, formData);
}
}


