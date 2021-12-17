import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPartialWeather, PartialWeather } from 'src/app/shared/models/weather.model';
import { WeatherService } from 'src/app/shared/services/weather.service';

@Component({
  selector: 'app-show-weather',
  templateUrl: './show-weather.component.html',
  styleUrls: ['./show-weather.component.scss']
})
export class ShowWeatherComponent implements OnInit {

 selectedCity : string = 'Salerno';
 selectedCityWeather$! : Observable<PartialWeather>


  constructor(private readonly http:WeatherService) { }


  ngOnInit(): void {}

  showCityWeather(){
    this.selectedCityWeather$ = this.http.getCityWeatherByName(this.selectedCity);

  }
}



