import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {IProduct} from '../../../../../../shared/mocks/4-services/products';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class ProductsService {

  public productsUrl = 'api/products/suggestion';

  constructor(
    private http: HttpClient
  ) {
  }

  public getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.productsUrl)
      .pipe(
        tap(res => console.log('fetched products', res)),
        catchError((err) => {
          console.log('error!!!!', err);
          return of([] as IProduct[]);
        })
      );
  }

  public getProductById(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`api/products/${id}`);
  }

}
