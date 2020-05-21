/**
 * Service responsible for running math operations.
 *
 * @author Eduardo S. Marçal
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  static readonly ADD: string = '+';
  static readonly SUBTRACT: string = '-';
  static readonly MULTIPLY: string = '*';
  static readonly DIVIDE: string = '/';

  constructor() { }

  /**
   * Runs a math operation between two numbers.
   * Operations: addition, subtraction, multiplication, and division.
   *
   * @param number1 number
   * @param number2 number
   * @param operation string
   * @return number
   */
  calculate(number1: number, number2: number, operation: string): number {
    let result: number;

    switch(operation) {
      case CalculatorService.ADD:
        result = number1 + number2;
        break;
      case CalculatorService.SUBTRACT:
        result = number1 - number2;
        break;
      case CalculatorService.MULTIPLY:
        result = number1 * number2;
        break;
      case CalculatorService.DIVIDE:
        result = number1 / number2;
        break;
      default:
        result = 0;
    }

    return result;
  }
}
