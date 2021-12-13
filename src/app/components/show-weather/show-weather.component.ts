import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/shared/services/weather.service';

@Component({
  selector: 'app-show-weather',
  templateUrl: './show-weather.component.html',
  styleUrls: ['./show-weather.component.scss']
})
export class ShowWeatherComponent implements OnInit {

 selectedCity : string = '';
 selectedCityWeather : any;


  constructor(private readonly http:WeatherService) { }


  ngOnInit(): void {}

  showCityWeather(){
    this.http.getCityWeatherByName(this.selectedCity).subscribe
    (response => this.selectedCityWeather = response);

  }
}

  //   this.http.getCityWeatherByName(this.cityName).subscribe
  // }


