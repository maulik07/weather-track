import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { WeatherConf } from './models/weather-conf';

@Injectable()
export class AppConfigService {

  constructor() { }

  readConfiguration() : Observable<WeatherConf[]> {
    let weatherConfs = [{id: 4880731}, {id: 5056033}, {id: 292223}, {id: 4254884}];

    return Observable.of(weatherConfs);
  }

}
