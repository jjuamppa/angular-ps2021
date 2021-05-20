import { Component} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

progreso = 50;


get getPorcentaje(): string {
  return `${this.progreso}%`;
}

cambiaValor(valor: number): number {

if (this.progreso >= 100 && valor >= 0) {
  return this.progreso = 100;
}

if (this.progreso <= 0 && valor < 0) {
  return this.progreso = 0;
}

this.progreso = this.progreso + valor;
}

}
