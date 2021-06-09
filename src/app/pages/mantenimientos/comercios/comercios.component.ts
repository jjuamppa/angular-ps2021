import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Comercio } from '../../../models/comercio.model';
import { ComercioService } from '../../../services/comercio.service';

@Component({
  selector: 'app-comercios',
  templateUrl: './comercios.component.html',
  styles: [
  ]
})
export class ComerciosComponent implements OnInit {

  constructor( public comercioService: ComercioService) { }

  public comercios: Comercio[] = [];
  public comerciosTemp: Comercio[] = [];
  public cargando = true;



  ngOnInit(): void {
    this.cargarComercios();
  }

  cargarComercios(): any {

    this.cargando = true,
    this.comercioService.cargarComercios()
        .subscribe( comercios => {
        this.cargando = false;
        this.comercios = comercios;
  });
  }

   buscar( termino: string ): any {
      if ( termino.length === 0 ) {
        return this.comercios = this.comerciosTemp;
      }
 }

 eliminarComercio( comercio: Comercio ): void {

  Swal.fire({
    title: '¿Borrar comercio?',
    text: `Esta a punto de borrar a ${ comercio.nombre }`,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Si, borrarlo'
  }).then((result) => {
    if (result.value) {

      this.comercioService.eliminarComercio( comercio )
        .subscribe( resp => {

          this.cargarComercios();
          Swal.fire(
            'Comercio borrado',
            `${ comercio.nombre } fue eliminado correctamente`,
            'success'
          );

        });

    }
  });

}

}


