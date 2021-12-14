import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPartialWeather } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {



  constructor(private readonly http : HttpClient) { }


getCityWeatherByName(selectedCity:string):Observable<IPartialWeather>{
  const params = new HttpParams().set('q',selectedCity).set('appid','51f71d7c995963ad8a76fecb16ed393b').set('units','metric')
  return this.http.get<any>(`${environment.apiUrl}/data/2.5/weather`, {params})
  .pipe(
    map( response => ({name: response.name,dt:response.main.temp,weatherDescription:response.weather[0].description, icon:response.weather[0].icon})))
  }

}

