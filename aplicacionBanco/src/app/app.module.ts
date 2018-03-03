import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';



import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MarketingComponent } from './components/marketing/marketing.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    MarketingComponent
  ],
  imports: [
    BrowserModule , FormsModule, HttpClientModule, HttpModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }