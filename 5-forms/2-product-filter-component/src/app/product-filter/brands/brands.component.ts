import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'ngx-shop-brands',
  templateUrl: './brands.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: BrandsComponent,
      multi: true,
    },
  ],
  styleUrls: ['./brands.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandsComponent implements ControlValueAccessor {

  @Input() public brands: string[] = [];

  public selectedBrands: string[] = [];
  public defCountToShow = 6;
  public isShow = false;
  public brandsToShow = [];

  // tslint:disable-next-line: ban-types
  private onChange!: Function;
  private onTouched = () => {};

  // implements required function of ControlValueAccessor:

  public writeValue(brands: string[]): void {
    // this.brandsToShow = brands;
  }

  // tslint:disable-next-line:ban-types
  public registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  public registerOnTouched(): void {}

  public check(e, brandName) {
    if (e.target.checked) {
      this.selectedBrands.push(brandName);
    } else {
      let i = 0;
      this.selectedBrands.forEach((item: string) => {
        if (item === brandName) {
          this.selectedBrands.splice(i, 1);
          return;
        }
        i++;
      });
    }

    this.onChange(this.selectedBrands);
  }

  public showBrand(index: number): boolean {
    if (this.isShow) {
      return true;
    }

    if (index < this.defCountToShow) {
      return true;
    }

    return false;
  }

  public show(): void {
    this.isShow = !this.isShow;
  }
}
