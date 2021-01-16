import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'review',
})
// @ts-ignore
export class ReviewPipe implements PipeTransform {
  public transform(countOfReviews: number | undefined): string {
    const enum suffixes {
      OneReview = 'отзыв',
      TwoReviews = 'отзыва',
      FiveReviews = 'отзывов'
    }
    let suffix = '';

    if (!countOfReviews) {
      return 'Нет отзывов';
    }

    if ((countOfReviews % 10) === 1 && (countOfReviews % 100) !== 11) {
      suffix = suffixes.OneReview; // 1, 21, 31, 121, 1021, ...
    }
    else if ([2, 3, 4].includes(countOfReviews % 10) && ![12, 13, 14].includes(countOfReviews % 100)) {
      suffix = suffixes.TwoReviews; // 2, 3, 4, 22, 23, 24, 122, ...
    }
    else {
      suffix = suffixes.FiveReviews;
    }

    return countOfReviews + ' ' + suffix;
  }
}
