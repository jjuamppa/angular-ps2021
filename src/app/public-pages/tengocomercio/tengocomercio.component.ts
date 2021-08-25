import { Component, OnInit } from '@angular/core';
import { NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { ComercioService } from '../../services/comercio.service';

@Component({
  selector: 'app-tengocomercio',
  templateUrl: './tengocomercio.component.html',
  styleUrls: []
})
export class TengocomercioComponent implements OnInit {

  public tengoComForm: FormGroup;

constructor(private fb: FormBuilder,
            private solcitudesServices: ComercioService ) {}

ngOnInit(): void {
  this.tengoComForm = this.fb.group( {
    nombre: ['', Validators.required],
    direccion: ['', Validators.required],
    telefono: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });
}

  enviar(): void {
    console.log(this.tengoComForm.value);
    this.solcitudesServices.crearSolicitud(this.tengoComForm.value)
        .subscribe(resp => {
        console.log(resp);
        this.tengoComForm.reset();
        Swal.fire(
          'Solicitud Enviada',
          'Su solicitud fue enviada correctamente',
          'success'
        );
    }, (err) => {
      // Si sucede un error
      Swal.fire('Error', err.error.msg, 'error' );
     });
  }
}


