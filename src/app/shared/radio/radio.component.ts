import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms/src/directives';

import { RadioOption } from './radio-option.model';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {
  @Input() options: RadioOption[];

  value: any;
  onChange: any;

  constructor() {}

  ngOnInit() {}

  setValue(v: any) {
    this.value = v;
    this.onChange(this.value);
  }

  public writeValue(obj: any): void {
    this.value = obj;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {}

  public setDisabledState(isDisabled: boolean): void {}
}
