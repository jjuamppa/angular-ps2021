import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ComofuncionaComponent } from './pages/comofunciona/comofunciona.component';
import { ParticipantesComponent } from './pages/participantes/participantes.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { TengocomercioComponent } from './pages/tengocomercio/tengocomercio.component';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';

export const routes: Routes = [
    {path: '',
      component: PagesComponent,
      canActivate: [AuthGuard],
    children: [
      {path: 'comofunciona', component: ComofuncionaComponent },
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent },
      {path: 'participantes', component: ParticipantesComponent },
      {path: 'tengocomercio', component: TengocomercioComponent },
      {path: '' , pathMatch: 'full', redirectTo: 'home' },
    ]},

    {path: 'dashboard', component: DashboardComponent },
    {path: 'header', component: HeaderComponent },
    {path: 'login', component: LoginComponent },
    {path: 'register', component: RegisterComponent },

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



