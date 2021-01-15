import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProduct} from '../../../../../shared/mocks/1-components/product';

@Component({
  selector: 'ngx-shop-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {

  @Input()
  public product: IProduct = {} as IProduct;

  @Output()
  public goToProduct = new EventEmitter<string>();

  public redirectTo(): void {
    this.goToProduct.emit();
  }

}
