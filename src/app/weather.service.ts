import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { TemperatureConf } from './models/temperature-conf';
import { WeatherConf } from './models/weather-conf';

@Injectable()
export class WeatherService {

  baseURL = "http://api.openweathermap.org/data/2.5/weather?units=metric&appid=6912a0ee99995b8550c1358af83f08d2&id="  

  constructor(private http: Http) { }

  getTempratureConfig(weatherConfigs: WeatherConf[] ) : Observable<TemperatureConf[]> {
    let requests = [];

    weatherConfigs.forEach( weatherConfig => {
      requests.push(this.http.get(this.baseURL+weatherConfig.id).map(res =>  {
        let data = res.json();
        let tempConfig = new TemperatureConf();
        tempConfig.currentTemp = data.main.temp;
        tempConfig.minTemp = data.main.temp_min;
        tempConfig.maxTemp = data.main.temp_max;
        tempConfig.name = data.name;
        tempConfig.id = data.id;        
        tempConfig.desc = data.weather[0].description;        
        return tempConfig;
      }));
    });
    return Observable.forkJoin(requests);
  }

}
