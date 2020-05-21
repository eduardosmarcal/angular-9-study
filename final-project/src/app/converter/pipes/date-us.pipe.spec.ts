import { DateUsPipe } from './date-us.pipe';

describe('DateUsPipe', () => {
  it('create an instance', () => {
    const pipe = new DateUsPipe();
    expect(pipe).toBeTruthy();
  });

  it('should format the date 2020-05-19 to 05/19/2020', () => {
    const pipe = new  DateUsPipe();
    expect(pipe.transform('2020-05-19')).toEqual('05/19/2020');
  });

  it('should format the date 2020/05/19 to 05/19/2020', () => {
    const pipe = new  DateUsPipe();
    expect(pipe.transform('2020/05/19')).toEqual('05/19/2020');
  });
});
