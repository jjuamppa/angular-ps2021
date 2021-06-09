import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Regalar', url: 'regalar' },
        { titulo: 'Mis Compras', url: 'transacciones' },
      ]
    },
    {
      titulo: 'Mantenimientos',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        { titulo: 'Usuarios', url: 'usuarios' },
        { titulo: 'Comercios', url: 'comercios' },
        { titulo: 'Transacciones', url: 'transacciones' },
        { titulo: 'Solicitudes', url: 'solicitudes' },
      ]
    },
  ];

  constructor() { }
}
