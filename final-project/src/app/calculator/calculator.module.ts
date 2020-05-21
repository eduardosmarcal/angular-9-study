import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorComponent } from './components';
import { CalculatorService } from './services';
import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorRoutingComponent } from './calculator-routing.component';

@NgModule({
  imports: [
    CommonModule,
    CalculatorRoutingModule
  ],
  declarations: [
    CalculatorComponent,
    CalculatorRoutingComponent
  ],
  exports: [
    CalculatorComponent
  ],
  providers: [
    CalculatorService
  ]
})
export class CalculatorModule { }
