import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {
  public usuario: Usuario;

  constructor(private usuarioService: UsuarioService) {
    // Para ver la Imagen
    this.usuario = usuarioService.usuario;
  }

  logout(): void {
    this.usuarioService.logout();
  }

}
