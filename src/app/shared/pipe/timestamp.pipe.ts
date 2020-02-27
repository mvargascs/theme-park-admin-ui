import { Pipe, PipeTransform } from '@angular/core';
import { firestore } from 'firebase';

@Pipe({
  name: 'timestamp'
})
export class TimestampPipe implements PipeTransform {

  transform(value: firestore.Timestamp, ...args: any[]): any {
    return value.toDate();
  }

}
