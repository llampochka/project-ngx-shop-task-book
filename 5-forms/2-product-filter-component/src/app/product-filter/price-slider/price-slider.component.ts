import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Options} from 'ng5-slider';
import {ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'ngx-shop-price-slider',
  templateUrl: './price-slider.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PriceSliderComponent,
      multi: true,
    },
  ],
})
export class PriceSliderComponent implements ControlValueAccessor, OnInit {

  constructor(
    private readonly fb: FormBuilder,
    private readonly cdr: ChangeDetectorRef
  ) {}

  public options: Options = {
    animate: false,
    floor: 0,
    hideLimitLabels: true,
    hidePointerLabels: true,
    ceil: 2000,
  };

  public pricesControl = this.fb.control([20, 80]);

  // tslint:disable-next-line:ban-types
  public onChange: Function = (value: any) => {};

  public ngOnInit(): void {
    // tslint:disable-next-line:typedef
    this.pricesControl.valueChanges.subscribe((price: number[]) => {
      this.pricesControl.setValue(price, { emitEvent: false });
      this.cdr.markForCheck();
    });
  }
  public writeValue(prices: number[]): void {
    const low = Number(prices[0] ?? this.options.floor);
    const high = Number(prices[1] ?? this.options.ceil);
    this.pricesControl.setValue([low, high], { emitEvent: false });
  }

  public registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  public registerOnTouched(): void {}

  public applyFilter(): void {
    this.onChange(this.pricesControl.value);
  }
}
