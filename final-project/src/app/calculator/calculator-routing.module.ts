import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalculatorComponent } from './components';
import { CalculatorRoutingComponent } from './calculator-routing.component';

export const CalculatorRoutes: Routes = [
  {
    path: 'calculator',
    component: CalculatorRoutingComponent,
    children: [
      {
        path: '',
        component: CalculatorComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(CalculatorRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CalculatorRoutingModule {}
