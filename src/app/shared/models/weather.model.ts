export interface IPartialWeather{
  name:string;
  sys:Sys;
  main:Main;
  weather:IWeather[];
}

export interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}
export interface weather{
  main:string;
  description:string;
  icon:string;
}

export interface Main{
  temp:number;
}


export interface IWeather{
  id:string;
  name:string;
  description:string;
  icon:string;
}

export class PartialWeather{
  protected constructor(
    public name = '',
    public state = '',
    public temp ='',
    public description = '',
    public icon = ''
  ) { }

  public static Build(item: IPartialWeather):PartialWeather{
    return new this(
      item.name,
      item.sys.country,
      item.main.temp.toFixed(0),
      item.weather[0].description,
      item.weather[0].icon
    )}
}
