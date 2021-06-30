import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { ComercioService } from '../../../services/comercio.service';
import { CargarUsuario } from '../../../interfaces/cargar-usuarios.interface';
import { UsuarioService } from '../../../services/usuario.service';
import { Comercio } from 'src/app/models/comercio.model';
import { Transaccion } from '../../../models/transaccion.model';
import { TransaccionService } from '../../../services/transaccion.service';
import { Solicitud } from 'src/app/models/solicitud.model';




@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styles: [
  ]
})
export class ReportesComponent implements OnInit {

  constructor( private comercioService: ComercioService,
               private transaccionService: TransaccionService,
               private usuarioService: UsuarioService ) {}

    public comercios: Comercio[] = [];
    public transacciones: Transaccion[] = [];
    public usuarios: Usuario[] = [];
    public solicitudes: Solicitud[] = [];
    public totalVentas: any;

    public totalUsuarios = 0;
    public desde = 0;



  ngOnInit(): void {
    this.cargarComercios(),
    this.cargarTransacciones();
    this.cargarUsuarios();
    this.cargarSolicitudes();
    this.totalVentasMensual();
  }


  cargarComercios(): any {
    this.comercioService.cargarComercios()
        .subscribe( comercios => {
          this.comercios = comercios;
  });
}

cargarTransacciones(): void {
  this.transaccionService.cargarTransaccion()
  .subscribe( transacciones => {
    this.transacciones = transacciones;
  });
}

cargarSolicitudes(): void {
  this.comercioService.cargarSolicitudes()
  .subscribe( solicitudes => {
    this.solicitudes = solicitudes;
  });
}

cargarUsuarios(): void {
  this.usuarioService.cargarUsuarios( this.desde )
  .subscribe( ({ total, usuarios }) => {
    this.totalUsuarios = total;
    this.usuarios = usuarios;
  });
}

// Suma del total vendido

totalVendido(): any {
    let total = 0;

    this.transacciones.forEach(t => {
      total += t.monto;
    });
    return total;
  }

// Suma del total vendido por mes ****No funciona*****

totalVentasMensual(): any {
  this.transaccionService.obetenerPromMensual()
                         .subscribe((data) => {
                            console.log(data);
                            this.totalVentas = data;
                            });
}


promedioVentas(total): any {

}


}
