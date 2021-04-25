import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ParticipantesComponent } from './pages/participantes/participantes.component';
import { ComofuncionaComponent } from './pages/comofunciona/comofunciona.component';
import { AboutComponent } from './pages/about/about.component';

// Modulos
import { AutModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';

// Importar Ruras
import { TengocomercioComponent } from './pages/tengocomercio/tengocomercio.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutModule,
    SharedModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }



