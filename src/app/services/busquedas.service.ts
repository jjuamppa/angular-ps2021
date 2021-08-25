import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';
import { Comercio } from '../models/comercio.model';
import { Solicitud } from '../models/solicitud.model';
import { Transaccion } from '../models/transaccion.model';
import { Envio } from '../models/envio.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class BusquedasService {

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


      private transformarUsuarios( resultados: any[] ): Usuario[] {

        return resultados.map(
          user => new Usuario(user.nombre, user.email, '', user.img, user.google, user.role, user.uid )
        );
      }

      private transformarComercios( resultados: any[] ): Comercio[] {
        return resultados;
      }

      private transformarSolicitudes( resultados: any[] ): Solicitud[] {
        return resultados;
      }
      private transformarTransacciones( resultados: any[] ): Transaccion[] {
        return resultados;
      }
      private transformarEnvios( resultados: any[] ): Envio[] {
        return resultados;
      }

      buscar(
        tipo: 'usuarios'|'comercios'|'solicitudes'|'transacciones'|'envios',
        termino: string
      ): any {

        const url = `${ base_url }/todo/coleccion/${tipo}/${termino}`;
        return this.http.get<any[]>( url, this.headers )
                .pipe(
                  map( (resp: any ) => {

                    switch ( tipo ) {
                      case 'usuarios':
                        return this.transformarUsuarios( resp.resultados );
                        case 'comercios':
                          return this.transformarComercios( resp.resultados );
                        case 'solicitudes':
                           return this.transformarSolicitudes( resp.resultados );
                        case 'transacciones':
                           return this.transformarTransacciones( resp.resultados );
                        case 'envios':
                           return this.transformarEnvios( resp.resultados );

                      default:
                        return [];
                    }

                  })
                );

      }

}

