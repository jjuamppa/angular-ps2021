import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { SharedModule } from '../shared/shared.module';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    ProgressComponent,
    Grafica1Component,
  ],
  exports: [
    ProgressComponent,
    Grafica1Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    ChartsModule,
  ],
})
export class PagesModule { }
