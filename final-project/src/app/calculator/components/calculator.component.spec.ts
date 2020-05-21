import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { CalculatorService } from '../services';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ],
      providers: [ CalculatorService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should  guarantee that 1 + 4 = 5', () => {
    const btn3 = fixture.debugElement.nativeElement.querySelector('#btn3');
    const btnAddition = fixture.debugElement.nativeElement.querySelector('#btnAddition');
    const btn2 = fixture.debugElement.nativeElement.querySelector('#btn2');
    const btnCalculate = fixture.debugElement.nativeElement.querySelector('#btnCalculate');
    const display = fixture.debugElement.nativeElement.querySelector('#display');

    btn3.click();
    fixture.detectChanges();

    btnAddition.click();
    fixture.detectChanges();

    btn2.click();
    fixture.detectChanges();

    btnCalculate.click();
    fixture.detectChanges();

    expect(display.value).toEqual('5');
  });
});
