import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { ComercioService } from '../../../services/comercio.service';
import { CargarUsuario } from '../../../interfaces/cargar-usuarios.interface';
import { UsuarioService } from '../../../services/usuario.service';
import { Comercio } from 'src/app/models/comercio.model';
import { Transaccion } from '../../../models/transaccion.model';
import { TransaccionService } from '../../../services/transaccion.service';
import { Solicitud } from 'src/app/models/solicitud.model';
import { Envio } from '../../../models/envio.model';
import { EnvioService } from '../../../services/envio.service';




@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styles: [
  ]
})
export class ReportesComponent implements OnInit {

  constructor( private comercioService: ComercioService,
               private transaccionService: TransaccionService,
               private usuarioService: UsuarioService,
               private envioService: EnvioService ) {}

    public comercios: Comercio[] = [];
    public transacciones: Transaccion[] = [];
    public envios: Envio[] = [];
    public usuarios: Usuario[] = [];
    public solicitudes: Solicitud[] = [];

    public totalVentasDia = 0;
    public totalVentasMes = 0;
    public totalUsuarios = 0;
    public totalComercios = 0;
    public totalSolicitudes = 0;
    public totalEnvios = 0;
    public desde = 0;



  ngOnInit(): void {
    this.cargarComercios(),
    this.cargarTransacciones();
    this.cargarEnvios();
    this.cargarUsuarios();
    this.cargarSolicitudes();
    this.totalVentasxDia();
    this.totalVentasxMes();
  }



cargarComercios(): void {
  this.comercioService.cargarComercios( this.desde )
  .subscribe( ({ total, comercios }) => {
    this.totalComercios = total;
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
  this.comercioService.cargarSolicitudes( this.desde )
  .subscribe( ({ total, solicitudes }) => {
    this.totalSolicitudes = total;
    this.solicitudes = solicitudes;
  });
}

cargarEnvios(): void {
  this.envioService.cargarEnvios( this.desde )
  .subscribe( ({ total, envios }) => {
    this.totalEnvios = total;
    this.envios = envios;
  });
}

cargarUsuarios(): void {
  this.usuarioService.cargarUsuarios( this.desde )
  .subscribe( ({ total, usuarios }) => {
    this.totalUsuarios = total;
    this.usuarios = usuarios;
  });
}


// Suma total vendido para enviar

totalVendidoEnvio(): any {
  let total = 0;

  this.envios.forEach(e => {
    total += e.monto;
  });
  return total;
}

// promedio de las Gift Enviadas
promedioMontoGiftEnvio(): any {
  return this.totalVendidoEnvio() / this.envios.length;
}

// Ganancia de gift enviadas
gananciaTotalEnvio(): any {
  return this.totalVendidoEnvio() * 0.10;
}

// Suma del total vendido

totalVendido(): any {
    let total = 0;

    this.transacciones.forEach(t => {
      total += t.monto;
    });
    return total;
  }

  gananciaTotal(): any {
    return this.totalVendido() * 0.10;
  }

// promedio de las Gift
promedioMontoGift(): any {
  return this.totalVendido() / this.transacciones.length;
}

 // Usuario de Google
  //  usuariosGoogle(): any {
  //    if ( this.usuarios.length ) {
  //      return this.totalUsuarios;
  //    }
  // }


totalVentasxMes(): any {
  this.transaccionService.obetenerVentaMes()
                          .subscribe((data) => {
                          console.log(data);
                          this.totalVentasMes = data.vta_mes;
  });
}

totalVentasxDia(): any {
  this.transaccionService.obetenerVentaDia()
                         .subscribe((data) => {
                            console.log(data);
                            this.totalVentasDia = data.vta_dia;
                            });
}

}
