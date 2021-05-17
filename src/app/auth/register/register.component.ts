import { Component, ɵSWITCH_COMPILE_INJECTABLE__POST_R3__ } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public formSumitted = false;

  public registerForm = this.fb.group( {
    nombre: ['jualio', Validators.required],
    email: ['jualio@jualio.com', [Validators.required, Validators.email]],
    password: ['123456', Validators.required],
    password2: ['123456', Validators.required],
    terminos: [true, Validators.required],
  }, {
    validators: this.passwordsIguales('password', 'password2')
  });

  constructor(private fb: FormBuilder,
              private usuarioService: UsuarioService,
              private router: Router ) { }

  crearUsuario(): void {
    this.formSumitted = true;
    console.log( this.registerForm.value );

    if ( this.registerForm.invalid){
    return;
    }
    // Realizar el posteo
    this.usuarioService.crearUsuario(this.registerForm.value)
                        .subscribe( resp => {
                        // Navegar al dasboard
                        this.router.navigateByUrl('/');
                       }, (err) => {
                        // Si sucede un error
                        Swal.fire('Error', err.error.msg, 'error' );
                       } );
  }

campoNoValido(campo: string): boolean {

  if (this.registerForm.get(campo).invalid && this.formSumitted) {
    return true;
      } else{
        return false;
      }
}

contrasenasNoValidas(): boolean {
  const pass1 = this.registerForm.get('password').value;
  const pass2 = this.registerForm.get('password2').value;

  if ( (pass1 !== pass2) && this.formSumitted ){
    return true;
  }else {
    return false;
  }
}

aceptaTerminos(): boolean {
  return !this.registerForm.get('terminos').value && this.formSumitted;
}

passwordsIguales( pass1Name: string, pass2Name: string ): any {

return ( formGroup: FormGroup ) => {

  const pass1Control = formGroup.get(pass1Name);
  const pass2Control = formGroup.get(pass2Name);

  if (pass1Control.value === pass2Control.value) {
    pass2Control.setErrors(null);
    } else {
    pass2Control.setErrors({noEsIgual: true});
  }
};
}
}
