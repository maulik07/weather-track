import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { WeatherConf } from './models/weather-conf';
import { environment } from '../environments/environment';

@Injectable()
export class AppConfigService {

  private baseApiUrl = environment.baseApiUrl;

  constructor(private http: Http) { }

  readConfiguration(): Observable<WeatherConf[]> {
    return this.makeApiCallAndFetchCities('/get-selected-cities');
  }

  getAvailableCities(): Observable<WeatherConf[]> {
    return this.makeApiCallAndFetchCities('/get-cities');
  }

  private makeApiCallAndFetchCities(route: String) : Observable<WeatherConf[]> {
    let weatherConfs: WeatherConf[] = [];
    return this.http.get(this.baseApiUrl + route).map(res => {
      let data = res.json();
      data.forEach(element => {
        let weatherConf = new WeatherConf();
        weatherConf.id = element._id;
        weatherConf.name = element.name;
        weatherConfs.push(weatherConf);
      });
      return weatherConfs
    });
  }

  startTrackingNewCity(id: number) {
    return this.http.get(this.baseApiUrl+'/track-city/'+id).map(res => res.json());
  }

}
