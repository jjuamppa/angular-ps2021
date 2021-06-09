import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { SharedModule } from '../shared/shared.module';
import { ChartsModule } from 'ng2-charts';
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { UsuarioService } from '../services/usuario.service';
import { PagesComponent } from './pages.component';
import { ComerciosComponent } from './mantenimientos/comercios/comercios.component';
import { TransaccionesComponent } from './mantenimientos/transacciones/transacciones.component';
import { Ng5SliderModule } from 'ng5-slider';




@NgModule({
  declarations: [
    Grafica1Component,
    PagesComponent,
    ProgressComponent,




  ],
  exports: [

    Grafica1Component,
    PagesComponent,
    ProgressComponent


  ],
  imports: [
    FormsModule,
    SharedModule,
    RouterModule,
    ChartsModule,
    ReactiveFormsModule,
    BrowserModule,
    CommonModule,
    Ng5SliderModule



  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PagesModule { }
