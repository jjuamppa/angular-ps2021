import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public menu = [];
  cargarMenu(): any {
    this.menu = JSON.parse(localStorage.getItem('menu')) || [];
  }
  // menu: any[] = [
  //   {
  //     titulo: 'Dashboard',
  //     icono: 'mdi mdi-gauge',
  //     submenu: [
  //       { titulo: 'Regalar', url: 'regalar' },
  //       { titulo: 'Mis Compras', url: 'misCompras' },
  //     ]
  //   },
  //   {
  //     titulo: 'Mantenimientos',
  //     icono: 'mdi mdi-folder-lock-open',
  //     submenu: [
  //       { titulo: 'Usuarios', url: 'usuarios' },
  //       { titulo: 'Comercios', url: 'comercios' },
  //       { titulo: 'Transacciones', url: 'transacciones' },
  //       { titulo: 'Solicitudes', url: 'solicitudes' },
  //       { titulo: 'Reportes', url: 'reportes' },
  //     ]
  //   },
  // ];

  constructor() { }
}
