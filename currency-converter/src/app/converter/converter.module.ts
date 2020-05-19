import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ConverterComponent } from './components';
import { CurrencyService, ConverterService } from './services';
import { NumberDirective } from './directives';
import { ModalConverterComponent } from './utils';
import { DateUsPipe } from './pipes';

@NgModule({
  declarations: [
    ConverterComponent,
    NumberDirective,
    ModalConverterComponent,
    DateUsPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [
    ConverterComponent
  ],
  providers:[
    CurrencyService,
    ConverterService
  ]
})
export class ConverterModule { }