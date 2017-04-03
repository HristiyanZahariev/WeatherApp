import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { WeatherService } from '../services/weather.service'


@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
  providers: [WeatherService]
})
export class HomeComponent {
	
	city: String;
	weather: WeatherResponse;

	constructor(private weatherService: WeatherService) {
		this.weatherService = weatherService;
	}

	searchWeather(): void {
		this.weatherService.searchWeather(this.city).subscribe((value: Response) => {
    		//let hero = <ServerInfo>value.json();
  			console.log(value.json())
  			this.weather = <WeatherResponse>value.json();
  			console.log(this.weather.main.temp)
  		});
	} 
}

export interface Coord {
        lon: number;
        lat: number;
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Main {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
}

export interface Wind {
    speed: number;
    deg: number;
}

export interface Clouds {
    all: number;
}

export interface Sys {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
}

export interface WeatherResponse {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    id: number;
    name: string;
    cod: number;
}