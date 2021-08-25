import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion.model';
import Swal from 'sweetalert2';
import { TransaccionService } from '../../../services/transaccion.service';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styles: [
  ]
})
export class TransaccionesComponent implements OnInit {

  constructor( private transaccionService: TransaccionService) { }

  public transacciones: Transaccion[] = [];
  public transaccionTemp: Transaccion[] = [];
  public cargando = true;


  ngOnInit(): void {
    this.cargarTransacciones();

  }

  cargarTransacciones(): void {

    this.cargando = true,
    this.transaccionService.cargarTransaccion()
    .subscribe( transacciones => {
      this.cargando = false;
      this.transacciones = transacciones;
  });
  }

   buscar( termino: string ): any {
      if ( termino.length === 0 ) {
        return this.transacciones = this.transaccionTemp;
      }
 }

 eliminarTransaccion( transaccion: Transaccion ): void {

  Swal.fire({
    title: '¿Borrar transaccion?',
    text: `Esta a punto de borrar a ${ transaccion.usuario.nombre }, $${ transaccion.monto }`,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Si, borrarlo'
  }).then((result) => {
    if (result.value) {

      this.transaccionService.eliminarTransaccion( transaccion )
        .subscribe( resp => {

          this.cargarTransacciones();
          Swal.fire(
            'Transaccion borrada',
            `${ transaccion.uid } fue eliminada correctamente`,
            'success'
          );

        });

    }
  });

}


}
