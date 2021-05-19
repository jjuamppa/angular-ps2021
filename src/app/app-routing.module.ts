import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

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
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PublicPagesComponent } from './public-pages/public-pages.component';

export const routes: Routes = [
    // {path: '',
    //   component: PagesComponent,
    // children: [
      //   {path: 'header', component: HeaderComponent },
      //   {path: 'comofunciona', component: ComofuncionaComponent },
      //   {path: 'home', component: HomeComponent},
      //   {path: 'about', component: AboutComponent },
      //   {path: 'participantes', component: ParticipantesComponent },
      //   {path: 'tengocomercio', component: TengocomercioComponent },
      //   {path: '' , pathMatch: 'full', redirectTo: 'home' },
      // ]},

      {path: '',
      component: PagesComponent,
      //   canActivate: [AuthGuard],
     children: [
      {path: 'dashboard', component: DashboardComponent },
      {path: 'progress', component: ProgressComponent },
      {path: 'grafica1', component: Grafica1Component },
      {path: '' , pathMatch: 'full', redirectTo: '/dashboard' },
  ] },

  {path: '',
     component: PublicPagesComponent,
     children: [
       {path: 'comofunciona', component: ComofuncionaComponent },
       {path: 'home', component: HomeComponent},
       {path: 'about', component: AboutComponent },
       {path: 'participantes', component: ParticipantesComponent },
       {path: 'tengocomercio', component: TengocomercioComponent },
      {path: '' , pathMatch: 'full', redirectTo: '/home' },
  ] },

    {path: 'login', component: LoginComponent },
    {path: 'register', component: RegisterComponent },

    {path: 'header', component: HeaderComponent },
    {path: 'navbar', component: NavbarComponent },

    {path: '**' , component: NopagefoundComponent },
];

@NgModule({
    declarations: [],
    imports: [
      RouterModule.forRoot( routes )
    ],
    exports: [ RouterModule],
  })
  export class AppRoutingModule { }



