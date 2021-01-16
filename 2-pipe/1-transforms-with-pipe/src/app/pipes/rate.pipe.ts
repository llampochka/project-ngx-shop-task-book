import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rate',
})
// @ts-ignore
export class RatePipe implements PipeTransform {
  public transform(value: number): number | undefined {
    let fractPart = value % 1;
    const intPart = Math.floor(value);
    // console.log('value', value);
    // console.log('fract', fractPart);
    // console.log('intPart', intPart);

    if (fractPart < 0.25) {
      fractPart = 0;
    }
    else if (fractPart < 0.75) {
      fractPart = 0.5;
    }
    else {
      fractPart = 1;
    }
    return intPart + fractPart;
  }
}
