import { Pipe, PipeTransform } from '@angular/core';
import * as firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;

@Pipe({
  name: 'timestampToDate'
})
export class TimestampToDatePipe implements PipeTransform {

  transform(value: Timestamp): Date {
    if (value instanceof Timestamp) {
      return value.toDate();
    } else {
      return value;
    }
  }
}
