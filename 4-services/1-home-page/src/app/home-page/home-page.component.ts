import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from '../../../../../shared/mocks/4-services/products';
import {ProductsService} from '../services/products/products.service';
import {Observable, Unsubscribable} from 'rxjs';
import {ICategory} from '../../../../../shared/mocks/4-services/categories';

@Component({
  selector: 'ngx-shop-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
})
// @ts-ignore
export class HomePageComponent implements OnInit, Unsubscribable {

  @Input() public products: IProduct[] = null;
  @Input() public categories: ICategory[] = null;

  goToBasket() {}
  redirectTo(val) {}
  goToProduct() {}
}
