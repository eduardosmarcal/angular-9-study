import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should guarantee that 1 + 4 = 5', () => {
    const result = service.calculate(1, 4, CalculatorService.ADD);
    expect(result).toEqual(5);
  });

  it('should guarantee that 1 - 4 = -3', () => {
    const result = service.calculate(1, 4, CalculatorService.SUBTRACT);
    expect(result).toEqual(-3);
  });

  it('should guarantee that 1 * 4 = 4', () => {
    const result = service.calculate(1, 4, CalculatorService.MULTIPLY);
    expect(result).toEqual(4);
  });

  it('should guarantee that 1 / 4 = 0.25', () => {
    const result = service.calculate(1, 4, CalculatorService.DIVIDE);
    expect(result).toEqual(0.25);
  });

  it('should return 0 for invalid operation', () => {
    const result = service.calculate(1, 4, '%');
    expect(result).toEqual(0);
  });
});
