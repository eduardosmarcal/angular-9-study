import { Directive, HostListener, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[numberDirective]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumberDirective,
    multi: true
  }]
})
export class NumberDirective implements ControlValueAccessor {
  onTouched: any;
  onChange: any;

  constructor(private element: ElementRef) { }

  /**
   * Implements the keyup event on the directive element.
   *
   * @param {any} $event
   */
  @HostListener('keyup', ['$event'])
  onKeyUp($event: any) {
    let value = $event.target.value;
    let decimalPosition = value.indexOf('.');

    value = value.replace(/[\D]/g, '');

    if (decimalPosition > 0) {
      value = value.substr(0, decimalPosition) + '.' + value.substr(decimalPosition);
    }

    $event.target.value = value;
    this.onChange(value);
  }

  /**
   * Register a function to be executed to update the value in the model.
   *
   * @param {any} fn The function that will be registered.
   * @return {void}
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Register a function to be executed to update the value in the model to the touched event.
   *
   * @param {any} fn The function that will be registered.
   * @return {void}
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * Set the value that's on the model.
   *
   * @param {any} value
   * @return {void}
   */
  writeValue(value: any): void {
    this.element.nativeElement.value = value;
  }
}
