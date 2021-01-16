import {Component, Input} from '@angular/core';

@Component({
  selector: 'ngx-shop-star-rating',
  templateUrl: './star-rating.component.html',
})
export class StarRatingComponent {

  @Input()
  public feedbackRate = 0;

  public stars = [0, 1, 2, 3, 4];

  highlight(starIndex): boolean {
    return starIndex + 1 <= Math.round(this.feedbackRate);
  }
}
