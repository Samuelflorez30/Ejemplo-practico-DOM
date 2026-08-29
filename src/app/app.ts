import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  num1: number | null = null;
  num2: number | null = null;
  operacion: string = '+';
  resultado: number | string = 0;
  historial: string[] = [];

  operar() {
    if (this.num1 === null || this.num2 === null) {
      this.resultado = 'Error';
      return;
    }

    let res = 0;
    switch (this.operacion) {
      case '+': res = this.num1 + this.num2; break;
      case '-': res = this.num1 - this.num2; break;
      case '*': res = this.num1 * this.num2; break;
      case '/': 
        if (this.num2 === 0) {
          this.resultado = 'Error';
          return;
        }
        res = this.num1 / this.num2; 
        break;
    }

    this.resultado = res;
    this.historial.push(`${this.num1} ${this.operacion} ${this.num2} = ${res}`);
  }
}
