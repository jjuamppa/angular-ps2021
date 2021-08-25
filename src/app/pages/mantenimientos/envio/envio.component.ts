import { Component, OnInit } from '@angular/core';
import { Envio } from '../../../models/envio.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EnvioService } from '../../../services/envio.service';
import { BusquedasService } from '../../../services/busquedas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styles: [
  ]
})
export class EnvioComponent implements OnInit {

  public solicitudForm: FormGroup;
  public cargando = true;
  public envios: Envio[] = [];
  public enviosTemp: Envio[] = [];

  public totalEnvios = 0;
  public desde = 0;

  constructor(private fb: FormBuilder,
              private envioService: EnvioService,
              private busquedasService: BusquedasService) { }


  ngOnInit(): void {
    this.cargarEnvios();
  }

  // cargarEnvios(): any {

  //   this.cargando = true,
  //   this.envioService.cargarEnvios()
  //       .subscribe( envios => {
  //       this.cargando = false;
  //       this.envios = envios;
  // });
  // }

  cargarEnvios(): void {
    this.cargando = true;
    this.envioService.cargarEnvios( this.desde )
      .subscribe( ({ total, envios }) => {
        this.totalEnvios = total;
        this.envios = envios;
        this.enviosTemp = envios;
        this.cargando = false;
    });
  }


  buscar( termino: string ): any {

    if ( termino.length === 0 ) {
      return this.cargarEnvios();
    }

    this.busquedasService.buscar( 'envios', termino )
        .subscribe( resp => {

          this.envios = resp;

        });
  }


  eliminarEnvio( envio: Envio ): void {

    Swal.fire({
      title: '¿Borrar comercio?',
      text: `Esta a punto de borrar a ${ envio.uid }`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, borrarlo'
    }).then((result) => {
      if (result.value) {

        this.envioService.eliminarEnvio( envio )
          .subscribe( resp => {

            this.cargarEnvios();
            Swal.fire(
              'Comercio borrado',
              `${ envio.uid } fue eliminado correctamente`,
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
    } else if ( this.desde >= this.totalEnvios ) {
      this.desde -= valor;
    }
    this.cargarEnvios();
  }

}
