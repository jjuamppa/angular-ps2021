import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from '../../../services/usuario.service';
import { BusquedasService } from '../../../services/busquedas.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {

  public totalUsuarios = 0;
  public usuarios: Usuario[] = [];
  public usuariosTemp: Usuario[] = [];

  public desde = 0;
  public cargando = true;
  // public imgSubs: Subscription;



  constructor( private usuarioService: UsuarioService,
               private busquedaService: BusquedasService) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.cargando = true;
    this.usuarioService.cargarUsuarios( this.desde )
      .subscribe( ({ total, usuarios }) => {
        this.totalUsuarios = total;
        this.usuarios = usuarios;
        this.usuariosTemp = usuarios;
        this.cargando = false;
    });
  }


  cambiarPagina( valor: number ): any {
    this.desde += valor;

    if ( this.desde < 0 ) {
      this.desde = 0;
    } else if ( this.desde >= this.totalUsuarios ) {
      this.desde -= valor;
    }
    this.cargarUsuarios();
  }

  buscar( termino: string ): any {

    if ( termino.length === 0 ) {
      return this.usuarios = this.usuariosTemp;
    }

    this.busquedaService.buscar( 'usuarios', termino )
        .subscribe( resp => {

          this.usuarios = resp;

        });
  }

eliminarUsuario( usuario: Usuario ): any {

  if ( usuario.uid === this.usuarioService.uid ) {
    return Swal.fire('Error', 'No puede borrarse a si mismo', 'error');
  }

  Swal.fire({
    title: '¿Borrar usuario?',
    text: `Esta a punto de borrar a ${ usuario.nombre }`,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Si, borrarlo'
  }).then((result) => {
    if (result.value) {

      this.usuarioService.eliminarUsuario( usuario )
        .subscribe( resp => {

          this.cargarUsuarios();
          Swal.fire(
            'Usuario borrado',
            `${ usuario.nombre } fue eliminado correctamente`,
            'success'
          );

        });

    }
  });

}

cambiarRole( usuario: Usuario ): void {

  this.usuarioService.guardarUsuario( usuario )
    .subscribe( resp => {
      console.log(resp);
    });
}

}
