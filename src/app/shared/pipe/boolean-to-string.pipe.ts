import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanToString'
})
export class BooleanToStringPipe implements PipeTransform {

  transform(value: boolean): string {
    if (value === false || value === true) {
      return value ? 'Yes' : 'No';
    } else {
      return value;
    }
  }
}
