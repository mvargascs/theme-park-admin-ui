import { Pipe, PipeTransform } from '@angular/core';
import { firestore } from 'firebase';

@Pipe({
  name: 'timestampToDate'
})
export class TimestampToDatePipe implements PipeTransform {

  transform(value: firestore.Timestamp, ...args: any[]): any {
    return value.toDate();
  }

}
