import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { EnvioForm } from '../interfaces/cargar-envio.interface';
import { Envio } from '../models/envio.model';
import { CargarEnvios2 } from '../interfaces/cargar-envio2.interface';


const base_url = environment.base_url;


@Injectable({
  providedIn: 'root'
})
export class EnvioService {

  constructor(private http: HttpClient) { }

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

  cargarEnvios(desde: number = 0): any {
    const url = `${base_url}/envios?desde=${ desde }`;
    return this.http.get<CargarEnvios2>(url, this.headers);
   }

  crearEnvio( formData: EnvioForm ): any {
    return this.http.post(`${base_url}/envios`, formData);
  }

  eliminarEnvio( envio: Envio ): any {

    const url = `${ base_url }/envios/${ envio.uid }`;
    return this.http.delete( url, this.headers );
  }
}
