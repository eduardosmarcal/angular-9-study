import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConverterComponent } from './components';
import { ConverterRoutingComponent } from './converter-routing.component';

export const ConverterRoutes: Routes = [
  {
    path: 'currency-converter',
    component: ConverterRoutingComponent,
    children: [
      {
        path: '',
        component: ConverterComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ConverterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ConverterRoutingModule {}
