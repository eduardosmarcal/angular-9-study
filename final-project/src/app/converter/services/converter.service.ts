import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Converter, ConverterResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  private readonly API_ACCESS_KEY = ""; // Get YOUR OWN Free API Key here: https://fixer.io/signup/free
  private readonly API_URL = `http://data.fixer.io/api/latest?access_key=${this.API_ACCESS_KEY}`;

  constructor(private http: HttpClient) { }

  /**
   * Run a GET request to the API.
   *
   * @param {Object} converter
   * @return {any}
   */
  convert(converter: Converter): any {
    const params = `&base=${converter.currencyFrom}&symbols=${converter.currencyTo}`;
    return this.http.get(this.API_URL + params);
  }

  /**
   * Return the rate to.
   *
   * @param {Object} converterResponse
   * @param {Object} converter
   * @return {number}
   */
  rateTo(converterResponse: ConverterResponse, converter: Converter): number {
    return converterResponse !== undefined ?
      converterResponse.rates[converter.currencyTo] :
      0;
  }

  /**
   * Return the rate from.
   *
   * @param {Object} converterResponse
   * @param {Object} converter
   * @return {string}
   */
  rateFrom(converterResponse: ConverterResponse, converter: Converter): string {
    return converterResponse !== undefined ?
      (1 / converterResponse.rates[converter.currencyTo]).toFixed(4) :
      '0';
  }

  /**
   * Return the rate date.
   *
   * @param {Object} converterResponse
   * @return {string}
   */
  rateDate(converterResponse: ConverterResponse): string {
    return converterResponse !== undefined ? converterResponse.date : '';
  }
}
