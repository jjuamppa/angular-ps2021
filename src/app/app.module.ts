import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfilComponent } from './pages/perfil/perfil.component';





import { AppComponent } from './app.component';
import { HomeComponent } from './public-pages/home/home.component';
import { ParticipantesComponent } from './public-pages/participantes/participantes.component';
import { ComofuncionaComponent } from './public-pages/comofunciona/comofunciona.component';
import { AboutComponent } from './public-pages/about/about.component';

// Modulos
import { AutModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';

// Importar Ruras
import { TengocomercioComponent } from './public-pages/tengocomercio/tengocomercio.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PublicPagesComponent } from './public-pages/public-pages.component';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './pages/mantenimientos/usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { ComerciosComponent } from './pages/mantenimientos/comercios/comercios.component';
import { TransaccionesComponent } from './pages/mantenimientos/transacciones/transacciones.component';
import { SolicitudesComponent } from './pages/mantenimientos/solicitudes/solicitudes.component';
import { PregFrecuentesComponent } from './public-pages/pregFrecuentes/pregFrecuentes.component';
import { ReportesComponent } from './pages/mantenimientos/reportes/reportes.component';
import { MisComprasComponent } from './pages/mis-compras/mis-compras.component';
import { EnvioComponent } from './pages/mantenimientos/envio/envio.component';
import { EnviargiftComponent } from './pages/enviargift/enviargift.component';

// Servicios


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ComofuncionaComponent,
    ParticipantesComponent,
    TengocomercioComponent,
    DashboardComponent,
    NopagefoundComponent,
    PagesComponent,
    PublicPagesComponent,
    PerfilComponent,
    UsuariosComponent,
    ComerciosComponent,
    TransaccionesComponent,
    SolicitudesComponent,
    PregFrecuentesComponent,
    ReportesComponent,
    MisComprasComponent,
    EnvioComponent,
    EnviargiftComponent



  ],
  imports: [
    AppRoutingModule,
    AutModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    CommonModule,


  ],
  exports: [
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }



