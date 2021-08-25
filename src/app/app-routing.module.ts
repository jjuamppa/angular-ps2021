import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import {CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';




import { HomeComponent } from './public-pages/home/home.component';
import { AboutComponent } from './public-pages/about/about.component';
import { ComofuncionaComponent } from './public-pages/comofunciona/comofunciona.component';
import { ParticipantesComponent } from './public-pages/participantes/participantes.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { TengocomercioComponent } from './public-pages/tengocomercio/tengocomercio.component';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { EnviargiftComponent } from './pages/enviargift/enviargift.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PublicPagesComponent } from './public-pages/public-pages.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuariosComponent } from './pages/mantenimientos/usuarios/usuarios.component';
import { ComerciosComponent } from './pages/mantenimientos/comercios/comercios.component';
import { TransaccionesComponent } from './pages/mantenimientos/transacciones/transacciones.component';
import { SolicitudesComponent } from './pages/mantenimientos/solicitudes/solicitudes.component';
import { PregFrecuentesComponent } from './public-pages/pregFrecuentes/pregFrecuentes.component';
import { TerminosComponent } from './auth/terminos/terminos.component';
import { ReportesComponent } from './pages/mantenimientos/reportes/reportes.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { MisComprasComponent } from './pages/mis-compras/mis-compras.component';
import { AdminGuard } from './guards/admin.guard';
import { EnvioComponent } from './pages/mantenimientos/envio/envio.component';

export const routes: Routes = [

      {path: '',
      component: PagesComponent,
      canActivate: [AuthGuard],
      children: [
      {path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'} },
      {path: 'regalar', component: ProgressComponent, data: {titulo: 'Regalar'} },
      {path: 'misCompras', component: MisComprasComponent, data: {titulo: 'Mis Compras'} },
      {path: 'grafica1', component: EnviargiftComponent, data: {titulo: 'Envio de Gift'} },
      {path: 'perfil', component: PerfilComponent, data: {titulo: 'Perfil del Usuario'} },
      {path: 'detalle', component: DetalleComponent, data: {titulo: 'Detalle de su compra'} },
      {path: '' , pathMatch: 'full', redirectTo: '/regalar' },

      // Mantenimientos solo admin
      {path: 'usuarios' , canActivate: [ AdminGuard ], component: UsuariosComponent, data: {titulo: 'Usuario de apliciacion'} },
      {path: 'comercios' , canActivate: [ AdminGuard ], component: ComerciosComponent, data: {titulo: 'Mant de Comercios'} },
      {path: 'transacciones' , canActivate: [ AdminGuard ],  component: TransaccionesComponent, data: {titulo: 'Mant de Transacciones'} },
      {path: 'solicitudes' , canActivate: [ AdminGuard ],  component: SolicitudesComponent, data: {titulo: 'Mant de Solicitudes'} },
      {path: 'reportes' , canActivate: [ AdminGuard ],  component: ReportesComponent, data: {titulo: 'Reportes Generales'} },
      {path: 'envio' , canActivate: [ AdminGuard ],  component: EnvioComponent, data: {titulo: 'Solicitud de Envio'} },


  ] },

  {path: '',
     component: PublicPagesComponent,
     children: [
       {path: 'comofunciona', component: ComofuncionaComponent },
       {path: 'home', component: HomeComponent},
       {path: 'about', component: AboutComponent },
       {path: 'participantes', component: ParticipantesComponent },
       {path: 'tengocomercio', component: TengocomercioComponent },
       {path: 'pregFrecuentes', component: PregFrecuentesComponent },
       {path: '' , pathMatch: 'full', redirectTo: '/home' },
  ] },

    {path: 'login', component: LoginComponent },
    {path: 'register', component: RegisterComponent },
    {path: 'terminosycondiciones', component: TerminosComponent },

    {path: 'header', component: HeaderComponent },
    {path: 'navbar', component: NavbarComponent },

    {path: '**' , component: NopagefoundComponent },
];

@NgModule({
    declarations: [

    ],
    imports: [
      RouterModule.forRoot( routes ),
      ReactiveFormsModule,
      FormsModule,
      BrowserModule,
      CommonModule,



    ],
    exports: [ RouterModule],


  })
  export class AppRoutingModule { }



