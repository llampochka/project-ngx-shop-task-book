import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {ICategory} from '../../../../../../shared/mocks/4-services/categories';

@Injectable()
export class CategoriesService {

  public url = 'api/categories';

  constructor(
    private http: HttpClient
  ) {
  }

  public getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.url)
      .pipe(
        tap(res => console.log('fetched categories', res)),
        catchError((err) => {
          console.log('error!!!!', err);
          return of([] as ICategory[]);
        })
      );
  }
}
