import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

import { AppConfigService } from './app-config.service';
import { WeatherService } from './weather.service';

import { WeatherConf } from './models/weather-conf';
import { TemperatureConf } from './models/temperature-conf';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  configs: WeatherConf[];
  tempratureConfigs: TemperatureConf[] = [];
  modalActions = new EventEmitter<string | MaterializeAction>();
  selectOptions = [{name:"London"},{name:"Ahmadabad"}];

  openModal() {
    this.modalActions.emit({ action: "modal", params: ['open'] });
  }
  closeModal() {
    this.modalActions.emit({ action: "modal", params: ['close'] });
  }

  constructor(private _appConfigSvc: AppConfigService, private _weatherSvc: WeatherService) { }

  ngOnInit() {
    this._appConfigSvc.readConfiguration().subscribe(configs => {
      this.configs = configs;
      this._weatherSvc.getTempratureConfig(configs).subscribe(results => {
        results.forEach(result => {
          console.log(result);
          this.tempratureConfigs.push(result);
        });
      })
    });
  }
  

}
