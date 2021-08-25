import { Component, OnInit } from '@angular/core';
import { Transaccion } from '../../models/transaccion.model';
import { TransaccionService } from '../../services/transaccion.service';
import { Usuario } from '../../models/usuario.model';
import { ThemeService } from 'ng2-charts';

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
    this.cargarTransaccion();
  }

  cargarTransaccion(): any {
    this.cargando = true,
    this.transaccionService.cargarTransaccion()
    // this.transaccionService.cargarTransaccionxId()
    // me da error por que necesita parametros
    .subscribe( transacciones => {
      this.cargando = false;
      this.transacciones = transacciones;
  });
  }

}
