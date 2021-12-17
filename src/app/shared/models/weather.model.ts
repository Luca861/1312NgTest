export interface IPartialWeather{
  city:string;
  temperature:number;
  description:string;
  icon:string;
}


export interface ICoords{
  lat:string;
  lon:string;
}


export interface ICoordsRequest{
  current : {
    temp:number;
    weather:[{ description:string, icon:string }]
  }
}
