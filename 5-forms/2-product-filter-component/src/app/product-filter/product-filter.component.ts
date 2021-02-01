import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'ngx-shop-product-filter',
  templateUrl: './product-filter.component.html',
})
export class ProductFilterComponent implements OnInit {

  @Input() public brands: string[] = [];

  @Output()
  public confirm: EventEmitter<FormData> = new EventEmitter<FormData>();

  public form: FormGroup = this.fb.group({
    brands: [[]],
    searchByName: [''],
    prices: [[0, 2000]],
  });

  // only for karma tests
  public selectedPrices: number[] = [];
  public selectedBrands: string[] = [];

  constructor(private readonly fb: FormBuilder) {}

  public ngOnInit(): void {
    this.form.valueChanges.subscribe((data) => {
      this.confirm.emit(data);
    });
  }

}
