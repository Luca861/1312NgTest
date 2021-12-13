import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
import { IPartialWeather } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {



  constructor(private readonly http : HttpClient) { }


getCityWeatherByName(selectedCity:string):Observable<any>{
  const params = new HttpParams().set('q',selectedCity).set('appid','51f71d7c995963ad8a76fecb16ed393b')
  return this.http.get<any>('http://api.openweathermap.org/data/2.5/weather', {params})
  .pipe(
    map( response => [response.name,response.main.temp]))
  }

}

