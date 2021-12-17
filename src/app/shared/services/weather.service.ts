import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPartialWeather, PartialWeather } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {



  constructor(private readonly http : HttpClient) { }


getCityWeatherByName(selectedCity:string):Observable<PartialWeather>{
  const params = new HttpParams().set('q',selectedCity)
  .set('appid',`${environment.tokenId}`)
  .set('units','metric')
  .set('lang', 'it')

  return this.http.get<IPartialWeather>(`${environment.apiUrl}/data/2.5/weather`, {params})
  .pipe(
    map( response => PartialWeather.Build(response)))
  }

}

