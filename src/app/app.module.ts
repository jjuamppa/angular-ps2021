import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ParticipantesComponent } from './pages/participantes/participantes.component';
import { ComofuncionaComponent } from './pages/comofunciona/comofunciona.component';
import { AboutComponent } from './pages/about/about.component';



// Importar Ruras
import { TengocomercioComponent } from './pages/tengocomercio/tengocomercio.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { NopagefoundComponent } from './auth/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';


// Servicios


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ComofuncionaComponent,
    ParticipantesComponent,
    TengocomercioComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    NopagefoundComponent,
    PagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }



