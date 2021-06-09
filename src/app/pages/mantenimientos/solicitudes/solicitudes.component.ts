import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Solicitud } from 'src/app/models/solicitud.model';
import Swal from 'sweetalert2';
import { ComercioService } from '../../../services/comercio.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styles: [
  ]
})
export class SolicitudesComponent implements OnInit {

  public solicitudForm: FormGroup;
  public cargando = true;
  public solicitudes: Solicitud[] = [];
  public solicitudesTemp: Solicitud[] = [];




  constructor( private fb: FormBuilder,
               private solicitudesServices: ComercioService ) { }

  ngOnInit(): void {
    this.cargarSolicitudes();
  }

cargarSolicitudes(): any {

  this.cargando = true,
  this.solicitudesServices.cargarSolicitudes()
  .subscribe( solicitudes => {
    this.cargando = false;
    this.solicitudes = solicitudes;
});
}

 buscar( termino: string ): any {
    if ( termino.length === 0 ) {
      return this.solicitudes = this.solicitudesTemp;
    }
}

eliminarSolicitud( solicitud: Solicitud ): void {

Swal.fire({
  title: '¿Borrar Solicitud?',
  text: `Esta a punto de borrar a ${ solicitud.nombre }`,
  icon: 'question',
  showCancelButton: true,
  confirmButtonText: 'Si, borrarlo'
}).then((result) => {
  if (result.value) {

    this.solicitudesServices.eliminarSolicitud( solicitud )
      .subscribe( resp => {

        this.cargarSolicitudes();
        Swal.fire(
          'Solicitud borrada',
          `${ solicitud.nombre } fue eliminado correctamente`,
          'success'
        );

      });

  }
});
}
}
