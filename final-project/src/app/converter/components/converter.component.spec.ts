import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ConverterComponent } from './converter.component';
import { CurrencyService, ConverterService } from '../services';
import { NumberDirective } from '../directives';
import { DateUsPipe } from '../pipes';
import { ModalConverterComponent } from '../utils';

describe('ConverterComponent', () => {
  let component: ConverterComponent;
  let fixture: ComponentFixture<ConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ConverterComponent,
        NumberDirective,
        DateUsPipe,
        ModalConverterComponent
      ],
      imports: [
        FormsModule,
        HttpClientModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        CurrencyService,
        ConverterService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
