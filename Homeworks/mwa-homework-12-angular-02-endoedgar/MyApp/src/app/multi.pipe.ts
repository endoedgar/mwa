import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multi'
})
export class MultiPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return new Array(args[0]).fill(value).join(" ");
  }

}
