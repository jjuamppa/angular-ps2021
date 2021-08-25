import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Comercio } from '../../../models/comercio.model';
import { ComercioService } from '../../../services/comercio.service';
import { BusquedasService } from '../../../services/busquedas.service';

@Component({
  selector: 'app-comercios',
  templateUrl: './comercios.component.html',
  styles: [
  ]
})
export class ComerciosComponent implements OnInit {

  public comerciosTemp: Comercio[] = [];
  public cargando = true;
  public comercios: Comercio[] = [];

  public totalComercios = 0;
  public desde = 0;

  constructor( private comercioService: ComercioService,
               private busquedaService: BusquedasService ) { }




  ngOnInit(): void {
    this.cargarComercios();
  }

  // cargarComercios(): any {

  //   this.cargando = true,
  //   this.comercioService.cargarComercios()
  //       .subscribe( comercios => {
  //       this.cargando = false;
  //       this.comercios = comercios;
  // });
  // }

  guardarCambios( comercio: Comercio ): any {
    this.comercioService.actualizarComercio( comercio.uid, comercio.nombre, comercio.email, comercio.direccion, comercio.telefono )
        .subscribe( resp => {
          Swal.fire( 'Actualizado', comercio.nombre, 'success' );
        });

  }


  cargarComercios(): void {
    this.cargando = true;
    this.comercioService.cargarComercios( this.desde )
      .subscribe( ({ total, comercios }) => {
        this.totalComercios = total;
        this.comercios = comercios;
        this.comerciosTemp = comercios;
        this.cargando = false;
    });
  }

  cambiarPagina( valor: number ): any {
    this.desde += valor;

    if ( this.desde < 0 ) {
      this.desde = 0;
    } else if ( this.desde >= this.totalComercios ) {
      this.desde -= valor;
    }
    this.cargarComercios();
  }

   buscar( termino: string ): any {
      if ( termino.length === 0 ) {
        return this.cargarComercios();
      }
      this.busquedaService.buscar( 'comercios', termino )
          .subscribe( resp => {

          this.comercios = resp;

        });
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

async abrirSweetAlert(): Promise<void>  {
  const { value = '' } = await Swal.fire<string>({
    title: 'Crear Comercio',
    text: 'Ingrese el nombre del nuevo comercio',
    input: 'text',
    inputPlaceholder: 'Nombre del comercio',
    showCancelButton: true,
  });
  if ( value.trim().length > 0 ) {
    this.comercioService.crearComercio(value)
                        .subscribe( (resp: any) => {
                        this.comercios.push( resp.comercio);
      });
  }
}


}


