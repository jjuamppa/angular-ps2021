import { Component} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

progreso = 7000;


get getPrecio(): number {
  return this.progreso;
}

cambiaValor(valor: number): number {

if (this.progreso >= 10000 && valor >= 0) {
  return this.progreso = 10000;
}

if (this.progreso <= 0 && valor < 0) {
  return this.progreso = 0;
}

this.progreso = this.progreso + valor;
}

}
