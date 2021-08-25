import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Solicitud } from 'src/app/models/solicitud.model';
import Swal from 'sweetalert2';
import { ComercioService } from '../../../services/comercio.service';
import { BusquedasService } from '../../../services/busquedas.service';

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

  public totalSolicitudes = 0;
  public desde = 0;


  constructor( private fb: FormBuilder,
               private solicitudesServices: ComercioService,
               private busquedasService: BusquedasService ) { }

  ngOnInit(): void {
    this.cargarSolicitudes();
  }

// cargarSolicitudes(): any {

//   this.cargando = true,
//   this.solicitudesServices.cargarSolicitudes()
//   .subscribe( solicitudes => {
//     this.cargando = false;
//     this.solicitudes = solicitudes;
// });
// }

guardarCambios( solicitud: Solicitud ): any {
  this.solicitudesServices.actualizarSolicitud( solicitud.uid, solicitud.nombre, solicitud.email, solicitud.direccion, solicitud.telefono )
      .subscribe( resp => {
        Swal.fire( 'Actualizado', solicitud.nombre, 'success' );
      });
}

cargarSolicitudes(): void {
  this.cargando = true;
  this.solicitudesServices.cargarSolicitudes( this.desde )
    .subscribe( ({ total, solicitudes }) => {
      this.totalSolicitudes = total;
      this.solicitudes = solicitudes;
      this.solicitudesTemp = solicitudes;
      this.cargando = false;
  });
}

buscar( termino: string ): any {

  if ( termino.length === 0 ) {
    return this.cargarSolicitudes();
  }

  this.busquedasService.buscar( 'solicitudes', termino )
      .subscribe( resp => {

        this.solicitudes = resp;

      });
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

cambiarPagina( valor: number ): any {
  this.desde += valor;

  if ( this.desde < 0 ) {
    this.desde = 0;
  } else if ( this.desde >= this.totalSolicitudes ) {
    this.desde -= valor;
  }
  this.cargarSolicitudes();
}
}
