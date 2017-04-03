import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HomeComponent } from './components/home.component';
import { AboutComponent } from './components/about.component';
import { HeaderComponent } from './components/header.component';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms'; //used for 2-way data binding
import { routing } from './app.routing';


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, routing ],
  declarations: [ AppComponent, HomeComponent, AboutComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
