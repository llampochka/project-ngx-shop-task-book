import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ICartProduct} from '../../../../../shared/mocks/1-components/cart-product';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
})

export class ShopCardComponent {
  @Input()
  product: ICartProduct = {} as ICartProduct;

  @Output() increment = new EventEmitter<object>();
  @Output() decrement = new EventEmitter<string>();

  public incrementProductInCart(): void{
    this.increment.emit({msg: 'increment emitted'});
  }

  public decrementProductInCart(): void{
    this.decrement.emit('decrement emitted');
  }
}
