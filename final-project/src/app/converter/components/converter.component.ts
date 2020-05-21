import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { faSync, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { Currency, Converter, ConverterResponse } from '../models';
import { CurrencyService, ConverterService } from '../services';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  faSync = faSync;
  faArrowRight = faArrowRight;

  currencies: Currency[];
  euroCurrency: Currency[];
  converter: Converter;
  converterResponse: ConverterResponse;
  hasError: boolean;

  @ViewChild("converterForm", { static: true }) converterForm: NgForm;

  constructor(
    private currencyService: CurrencyService,
    private converterService: ConverterService
  ) {}

  ngOnInit(): void {
    this.currencies = this.currencyService.getAll();
    this.euroCurrency = this.currencyService.getEuro();
    this.init();
  }

  /**
   * Initialize the converter.
   *
   * @return {void}
   */
  init(): void {
    this.converter = new Converter('EUR', 'USD', null);
    this.hasError = false;
  }

  /**
   * Run the convertion.
   *
   * @return {void}
   */
  convert(): void {
    if (this.converterForm.form.valid) {
      this.converterService.convert(this.converter).subscribe(
        response => this.converterResponse = response,
        error => this.hasError = true
      );
    }
  }

}
