import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short'
})
export class ShortPipe implements PipeTransform {
  transform(value: string, ...args: any): string {
    return `${value.substring(0, args[0])}...`;
  }
}
