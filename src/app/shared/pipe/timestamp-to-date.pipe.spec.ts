import { TimestampToDatePipe } from './timestamp-to-date.pipe';
import * as firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;

describe('TimestampToDatePipe', () => {
  let pipe: TimestampToDatePipe;

  beforeEach(() => {
    pipe = new TimestampToDatePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('Invalid Inputs', () => {
    it('should return object', () => {
      const testObj = { a: 'a' } as any;
      const actual = pipe.transform(testObj);

      expect(actual).toEqual(testObj);
    });

    it('should return null', () => {
      const actual = pipe.transform(null);

      expect(actual).toEqual(null);
    });

    it('should return undefined', () => {
      const actual = pipe.transform(undefined);

      expect(actual).toEqual(undefined);
    });

    it('should return value', () => {
      const testInput = 1 as any;

      const actualValue = pipe.transform(testInput);

      expect(actualValue).toEqual(testInput);
    });
  });

  describe('Valid Inputs', () => {
    it('should return Date', () => {
      const testInput = Timestamp.now();
      const expectedValue = testInput.toDate();

      const actualValue = pipe.transform(testInput);

      expect(actualValue).toEqual(expectedValue);
    });
  });
});
