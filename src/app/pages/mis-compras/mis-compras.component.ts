import { Component, OnInit } from '@angular/core';
import { Transaccion } from '../../models/transaccion.model';
import { TransaccionService } from '../../services/transaccion.service';

@Component({
  selector: 'app-mis-compras',
  templateUrl: './mis-compras.component.html',
  styles: [
  ]
})
export class MisComprasComponent implements OnInit {

  constructor(private transaccionService: TransaccionService) { }

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

}
