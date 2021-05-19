import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';



@NgModule({
  declarations: [ProgressComponent, Grafica1Component],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
