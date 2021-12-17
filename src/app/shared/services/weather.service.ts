import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICoords, ICoordsRequest, IPartialWeather } from '../models/weather.model';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {



  constructor(private readonly http : HttpClient) { }


getCityWeatherByName(lat:string, lon:string, selectedCity:string):Observable<IPartialWeather>{
  const params = new HttpParams()
  .set('lat', lat)
  .set('lon', lon)
  .set('appid',`${environment.tokenId}`)
  .set('units','metric')
  .set('lang', 'it')

  return this.http.get<ICoordsRequest>(`${environment.apiUrl}/data/2.5/onecall`, {params}).pipe(
    map( response => ({
      city : selectedCity,
      temperature :Math.round(response.current.temp),
      description : response.current.weather[0].description,
      icon : response.current.weather[0].icon
  })))}



getCityWeatherByCoords(selectedCity:string):Observable<IPartialWeather>{
  const params = new HttpParams()
  .set('city',selectedCity)
  .set('format','json')

  return this.http.get<ICoords[]>(`${environment.apiCoord}`, {params})
  .pipe(
    switchMap(response => this.getCityWeatherByName(response[0].lat, response[0].lon, selectedCity))
  )
}

}

