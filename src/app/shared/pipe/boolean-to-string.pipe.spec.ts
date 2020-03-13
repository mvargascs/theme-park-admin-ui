import { BooleanToStringPipe } from './boolean-to-string.pipe';

describe('BooleanToStringPipe', () => {
  let pipe: BooleanToStringPipe;

  beforeEach(() => {
    pipe = new BooleanToStringPipe();
  })

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
    it('should return Yes', () => {
      const testInput = true;
      const expectedValue = 'Yes';

      const actualValue = pipe.transform(testInput);

      expect(actualValue).toEqual(expectedValue);
    });

    it('should return No', () => {
      const testInput = false;
      const expectedValue = 'No';

      const actualValue = pipe.transform(testInput);
      
      expect(actualValue).toEqual(expectedValue);
    });
  });
});
