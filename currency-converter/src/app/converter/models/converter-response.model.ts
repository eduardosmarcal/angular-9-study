export class ConverterResponse {

  constructor(
    public base: string,
    public date: string,
    public rates: object
  ) {}

}
