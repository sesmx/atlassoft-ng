import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeroprefix'
})
export class ZeroprefixPipe implements PipeTransform {
  transform(value: number, ...args: any): string {
    return `${(value < 10 ? '0' : '')}${value}`;
  }
}
