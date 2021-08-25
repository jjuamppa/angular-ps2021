import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { ChartsModule } from 'ng2-charts';
import { PagesComponent } from './pages.component';
import { Ng5SliderModule } from 'ng5-slider';
import { DonaComponent } from '../components/dona/dona.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ProgressComponent } from './progress/progress.component';




@NgModule({
  declarations: [
    PagesComponent,
    DonaComponent,
    DetalleComponent,
    ProgressComponent,

  ],
  exports: [
    PagesComponent,
    DonaComponent



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
