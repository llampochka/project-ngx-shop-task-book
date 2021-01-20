import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ICategory} from '../../../../../shared/mocks/3-directives/categories';

@Component({
  selector: 'ngx-shop-category-dropdown',
  templateUrl: './category-dropdown.component.html',
})
export class CategoryDropdownComponent {

  public currentIndex = null;
  public currentCategory = '';
  public currentCategoryId = '';

  @Input()
  public categories: ICategory[] = [];

  @Output()
  public subCategorySelectEvent = new EventEmitter<string>();

  public showSubCategories(index: number): void {
    this.currentIndex = index;
  }

  public isSubCategoryShown(index: number): boolean {
    return index === this.currentIndex;
  }

  public subCategorySelect(categoryName: string, categoryId: string): void {
    this.currentCategoryId = categoryId;
    this.subCategorySelectEvent.emit(categoryName);
  }
}
