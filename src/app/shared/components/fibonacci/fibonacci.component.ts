import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fibonacci',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './fibonacci.component.html',
  styleUrl: './fibonacci.component.scss'
})
export class FibonacciComponent {

  inputNumber!: number;
  fibonacciSeries: number[] = [];

  generateFibonacci() {
    
    let fibonacci = [0, 1];
    while (fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2] <= this.inputNumber) {
      fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
    }
    this.fibonacciSeries = fibonacci;
  }
}
