import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Converter, ConverterResponse } from '../models';
import { ConverterService } from '../services';

@Component({
  selector: 'modal-converter',
  templateUrl: './modal-converter.component.html',
  styleUrls: ['./modal-converter.component.css']
})
export class ModalConverterComponent implements OnInit {

  @Input() id: string;
  @Input() converter: Converter = new Converter();
  @Input() converterResponse: ConverterResponse;
  @Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();

  constructor(private converterService: ConverterService) { }

  ngOnInit(): void {
  }

  newSearch() {
    this.onConfirm.emit();
  }

  get convertedAmount(): string {
    return this.converterResponse !== undefined ?
      (this.converter.amount * this.converterResponse.rates[this.converter.currencyTo]).toFixed(2) :
      "0";
  }

  get rateTo(): number {
    return this.converterService.rateTo(this.converterResponse, this.converter);
  }

  get rateFrom(): string {
    return this.converterService.rateFrom(this.converterResponse, this.converter);
  }

  get rateDate(): string {
    return this.converterService.rateDate(this.converterResponse);
  }

}
