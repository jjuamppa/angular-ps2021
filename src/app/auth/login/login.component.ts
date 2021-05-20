import { Component, NgZone, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../services/usuario.service';
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formSumitted = false;
  public auth2: any;

  public loginForm = this.fb.group({
    email: [ localStorage.getItem('email') || '', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    remember: [false],
  });

  constructor(private router: Router,
              private fb: FormBuilder,
              private usuarioServices: UsuarioService,
              private ngZone: NgZone  ) { }
  ngOnInit(): void {
this.renderButton();  }

  login(): void {
this.usuarioServices.login(this.loginForm.value)
                    .subscribe(resp => {
                      if (this.loginForm.get('remember').value){
                        localStorage.setItem('email', this.loginForm.get('email').value);
                      } else {
                      localStorage.removeItem('email');
                      }
                        // Navegar al dasboard
                      this.router.navigateByUrl('/');
                    }, (err) => {
                      // Si sucede un error
                      Swal.fire('Error', err.error.msg, 'error' );
                     } );
}

renderButton(): void {
  gapi.signin2.render('my-signin2', {
    scope: 'profile email',
    width: 240,
    height: 50,
    longtitle: true,
    theme: 'dark',
      });
  this.startApp();
}

startApp(): void {
gapi.load('auth2', () => {
  // Retrieve the singleton for the GoogleAuth library and set up the client.
  this.auth2 = gapi.auth2.init({
    client_id: '229898828730-03jp8pfk0a4jod365vr2j8q8dur8ifum.apps.googleusercontent.com',
    cookiepolicy: 'single_host_origin',
 });
  this.attachSignin(document.getElementById('my-signin2'));
});
}

attachSignin(element): void {

  this.auth2.attachClickHandler( element, {},
      (googleUser) => {
          const id_token = googleUser.getAuthResponse().id_token;
          // console.log(id_token);
          this.usuarioServices.loginGoogle( id_token )
            .subscribe( resp => {
              // Navegar al Dashboard
              this.ngZone.run( () => {
                this.router.navigateByUrl('/');
              });
            });

      }, (error) => {
          alert(JSON.stringify(error, undefined, 2));
      });
}

}

