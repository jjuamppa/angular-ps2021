import { Component, OnInit } from '@angular/core';
import { Comercio } from '../../models/comercio.model';
import { ComercioService } from '../../services/comercio.service';
import { BusquedasService } from '../../services/busquedas.service';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: []
})
export class ParticipantesComponent implements OnInit {

  public comerciosTemp: Comercio[] = [];
  public cargando = true;
  public comercios: Comercio[] = [];

  public totalComercios = 0;
  public desde = 0;

  constructor( public comercioService: ComercioService,
               public busquedasService: BusquedasService ) { }


  ngOnInit(): void {
    this.cargarComercios();

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
    this.busquedasService.buscar( 'comercios', termino )
        .subscribe( resp => {

        this.comercios = resp;

      });
}

}
