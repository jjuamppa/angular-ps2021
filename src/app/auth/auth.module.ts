import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TerminosComponent } from './terminos/terminos.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    TerminosComponent,
    ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    TerminosComponent
  ]
})
export class AutModule { }
