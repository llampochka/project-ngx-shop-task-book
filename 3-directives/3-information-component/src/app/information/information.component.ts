import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProduct} from '../../../../../shared/mocks/3-directives/product';
import {fakeAsync} from '@angular/core/testing';

@Component({
  selector: 'ngx-shop-information',
  templateUrl: './information.component.html',
})
export class InformationComponent {
  @Input()
  public product: IProduct = null;

  @Output()
  public addToCart = new EventEmitter<string>();

  public isShow = false;

  public addToBasket(): void {
    this.addToCart.emit('товар добавлен в кoрзину');
  }

  public show(): void {
    this.isShow = !this.isShow;
  }

}
