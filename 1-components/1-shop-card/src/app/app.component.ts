import { Component, OnChanges } from '@angular/core';
import { cartProduct, ICartProduct } from '../../../../shared/mocks/1-components/cart-product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnChanges {
  public title = '1. Интерполяция и связывание (Карточка товара в корзине)';
  public terminalMessage: string;
  public product: ICartProduct = cartProduct;

  public increment($event) {
    console.log($event);
    this.terminalMessage = 'Увеличение количества товара';
    this.product.count++;
  }

  public decrement() {
    this.terminalMessage = 'Уменьшение количества товара';
    if (this.product.count === 1) {
      return;
    }
    this.product.count--;
  }

  callPhone(phone: string): void{
    console.log('phone', phone);
  }

  ngOnChanges() {
    console.log('component changed');
  }
}
