import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spacing'
})
export class SpacingPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    return value.replace(/([A-Z])/g, ' $1');
  }

}
