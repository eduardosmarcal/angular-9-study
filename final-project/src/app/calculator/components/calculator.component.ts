import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  private number1: string;
  private number2: string;
  private operation: string;
  private result: number;

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void {
    this.clear();
  }

  /**
   * Reset all variables to the default values.
   *
   * @return void
   */
  clear(): void {
    this.number1 = '0';
    this.number2 = null;
    this.operation = null;
    this.result = null;
  }

  /**
   * Register the entered number to calculate after.
   *
   * @param string number
   * @return void
   */
  registerNumber(number: string): void {
    if (this.operation === null) {
      this.number1 = this.concatenateNumber(this.number1, number);
    } else {
      this.number2 = this.concatenateNumber(this.number2, number);
    }
  }

  /**
   * Concatenate the registered number with the entered number
   * formatting the decimal value (if applied).
   *
   * @param string currentNumber
   * @param string numberToConcatenate
   * @return string
   */
  concatenateNumber(currentNumber: string, numberToConcatenate: string): string {
    if (currentNumber === '0' || currentNumber === null) {
      currentNumber = '';
    }

    if (numberToConcatenate === '.' && currentNumber === '') {
      return '0.';
    }

    if (numberToConcatenate === '.' && currentNumber.includes('.')) {
      return currentNumber;
    }

    return currentNumber + numberToConcatenate;
  }

  /**
   * Set operation.
   * If an operation has already been set, execute calculation and set the new operation.
   *
   * @param string operation
   * @return void
   */
  setOperation(operation: string): void {
    if (this.operation === null) {
      this.operation = operation;
      return;
    }

    if (this.number2 !== null) {
      this.result = this.calculatorService.calculate(+this.number1, +this.number2, this.operation);
      this.operation = operation;
      this.number1 = this.result.toString();
      this.number2 = null;
      this.result = null;
    }
  }

  /**
   * Calculate the current operation.
   *
   * @return void
   */
  calculate(): void {
    if (this.number2 === null) {
      return;
    }

    this.result = this.calculatorService.calculate(+this.number1, +this.number2, this.operation);
  }

  /**
   * Display the value on the calculator.
   *
   * @return string
   */
  get display(): string {
    if (this.result !== null) {
      return this.result.toString();
    }

    if (this.number2 !== null) {
      return this.number2;
    }

    return this.number1;
  }
}
