import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

	body: any;

	private extractData(res: Response) {
    	let body = res.json();
    	return body.data || { };
  	}

	constructor(private http: Http) {
	}

	searchWeather(cityName: String) {
		console.log(cityName);
		let url = 'http://api.openweathermap.org/data/2.5/weather?q={';
		console.log(url+cityName+'}'+'&appid=' + "d6232358f2fc65c9134675ac42acd2a2" + '}');
		return this.http.get(url+cityName+'&APPID=' + "d6232358f2fc65c9134675ac42acd2a2")
	}
}