import {
  Component,
  ChangeDetectionStrategy, Input, EventEmitter, Output,
} from '@angular/core';

import {IProduct, oneProduct} from '../../../../../shared/mocks/1-components/product';

@Component({
  selector: 'ngx-shop-content-product',
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryProductComponent {

  @Input()
  public product: IProduct = {} as IProduct;

  @Output()
  public addToCart = new EventEmitter<string>();

  @Output()
  public goToProduct = new EventEmitter<string>();

  public addToBasket(): void {
    this.addToCart.emit();
  }

  public redirectTo(): void {
    this.goToProduct.emit();
  }

}
