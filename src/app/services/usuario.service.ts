import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { RegisterForm } from '../interfaces/register-form.interface';
import { LoginForm } from '../interfaces/login-form.interface';

import { Usuario } from '../models/usuario.model';
import { CargarUsuario } from '../interfaces/cargar-usuarios.interface';

const base_url = environment.base_url;
declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public auth2: any;
  public usuario: Usuario;

  constructor( private http: HttpClient,
               private router: Router,
               private ngZone: NgZone) {

this.googleInit();
}


get token(): string {
return localStorage.getItem('token') || '';
}

get uid(): string {
return this.usuario.uid || '';
}

get role(): 'ADMIN_ROLE' | 'USER_ROLE' {
  return this.usuario.role;
}

get headers(): any {
return {
 headers: {
 'x-token': this.token
  }
};
}

googleInit(): void {
  gapi.load('auth2', () => {
    // Retrieve the singleton for the GoogleAuth library and set up the client.
    this.auth2 = gapi.auth2.init({
      clientuid: '229898828730-03jp8pfk0a4jod365vr2j8q8dur8ifum.apps.googleusercontent.com',
      cookiepolicy: 'single_host_origin',
   });
  });

}

guardarLocalStorage(token: string, menu: any): void {
      localStorage.setItem('token', token);
      localStorage.setItem('menu', JSON.stringify(menu) );
}

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('menu');

    this.auth2.signOut().then(() => {
      this.ngZone.run(() => {
        this.router.navigateByUrl('/home');
      });
   });
  }

  validarToken(): Observable<boolean> {
  const token = localStorage.getItem('token') || '';
  return this.http.get(`${base_url}/login/renew`,
  { headers:
    { 'x-token': this.token }
  }).pipe(
    map( (resp: any) => {

      const {email, google, password, nombre, img = '', role, uid } = resp.usuario;
      this.usuario = new Usuario(google, email, '', nombre, img, role, uid);
      this.guardarLocalStorage(resp.token, resp.menu);
      return true;

  }),
  catchError(error => of(false))
  );
  }

crearUsuario( formData: RegisterForm ): any {
  return this.http.post(`${base_url}/usuarios`, formData)
                  .pipe(
                  tap( (resp: any) => {
                  this.guardarLocalStorage(resp.token, resp.menu);
                  })
                  );
}

actualizarPerfil( data: {email: string, nombre: string, role: string} ): any {
data = {
  ...data,
  role: this.usuario.role
};
return this.http.put(`${base_url}/usuarios/${this.uid}`, data, this.headers);
}

login( formData: LoginForm ): any {
  return this.http.post(`${base_url}/login`, formData)
                  .pipe(
                  tap( (resp: any) => {
                  this.guardarLocalStorage(resp.token, resp.menu);
                  })
                  );
}

loginGoogle( token ): any {
  return this.http.post(`${base_url}/login/google`, {token})
                  .pipe(
                  tap( (resp: any) => {
                  this.guardarLocalStorage(resp.token, resp.menu);
                  })
                  );
}


  cargarUsuarios(desde: number = 0): any {
     const url = `${base_url}/usuarios?desde=${ desde }`;
     return this.http.get<CargarUsuario>(url, this.headers);
    }


 eliminarUsuario( usuario: Usuario ): any {

     const url = `${ base_url }/usuarios/${ usuario.uid }`;
     return this.http.delete( url, this.headers );
 }

 guardarUsuario( usuario: Usuario ): any {

  return this.http.put(`${ base_url }/usuarios/${ usuario.uid }`, usuario, this.headers );

}

}
