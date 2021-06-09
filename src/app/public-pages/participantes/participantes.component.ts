import { Component, OnInit } from '@angular/core';
import { Comercio } from '../../models/comercio.model';
import { ComercioService } from '../../services/comercio.service';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: []
})
export class ParticipantesComponent implements OnInit {

  constructor( public comercioService: ComercioService ) { }
  public comercios: Comercio[] = [];
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

}
