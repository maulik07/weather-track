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
  availableCities: WeatherConf[] = [];
  selectedCityId: number;

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
          this.tempratureConfigs.push(result);
        });
      })
    });

    this._appConfigSvc.getAvailableCities().subscribe(availableCities => {
      this.availableCities = availableCities;
      this._resetDefaultSelectedCity();   
    });
  }

  private _resetDefaultSelectedCity() {
    this.selectedCityId = this.availableCities.length > 0 ? this.availableCities[0].id : undefined;
  }

  onSelectionChanged(data) {    
    this.selectedCityId = data;
  }

  startTrackingNewCity() {
    if (this.selectedCityId !== undefined) {
      let id = this.selectedCityId;
      this._appConfigSvc.startTrackingNewCity(id).subscribe(res => {
          this.availableCities = this.availableCities.filter(function(value) {
            return value.id != id;
          });
          this._resetDefaultSelectedCity();   
          this._weatherSvc.getTempratureConfig([new WeatherConf(id)]).subscribe(results => {
            results.forEach(result => {              
              this.tempratureConfigs.push(result);
            });
          });
      });
    }
  }

  stopTrackingCity(tempConfig: TemperatureConf) {    
    this._appConfigSvc.stopTrackingCity(tempConfig.id).subscribe(res => {
      
      this._appConfigSvc.getAvailableCities().subscribe(availableCities => {
        this.availableCities = availableCities;
        this._resetDefaultSelectedCity();   
      });            
      this.tempratureConfigs = this.tempratureConfigs.filter(config => config.id != tempConfig.id);
    });
  }
  
}
