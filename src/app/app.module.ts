import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutModule,
    SharedModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }



