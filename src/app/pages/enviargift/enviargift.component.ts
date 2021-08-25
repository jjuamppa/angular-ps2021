import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Envio } from 'src/app/models/envio.model';
import Swal from 'sweetalert2';
import { EnvioService } from '../../services/envio.service';

@Component({
  selector: 'app-enviargift',
  templateUrl: './enviargift.component.html',
  styles: [
  ]
})
export class EnviargiftComponent implements OnInit {

  public regalarEnCasaForm: FormGroup;

  constructor(private fb: FormBuilder,
              private envioService: EnvioService) { }


  ngOnInit(): void {

    this.regalarEnCasaForm = this.fb.group( {
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
      monto: ['', Validators.required],
      fecha: ['', Validators.required],
    });
  }



  enviar(): void {
    console.log(this.regalarEnCasaForm.value);
    this.envioService.crearEnvio( this.regalarEnCasaForm.value )
        .subscribe(resp => {
        console.log(resp);
        this.regalarEnCasaForm.reset();
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
