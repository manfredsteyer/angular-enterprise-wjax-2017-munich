import { HttpClientModule } from '@angular/common/http';
import { APP_ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { FlightService } from './flight-booking/flight-search/flight.service';
import { BASE_URL } from './app.tokens';
import { CityPipe } from './shared/pipes/city.pipe';
import { EventService } from './event.service';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { OAuthModule } from 'angular-oauth2-oidc';
import { FlightBookingModule } from "app/flight-booking/flight-booking.module";
import { BasketComponent } from './basket/basket.component';
import { StoreModule } from '@ngrx/store';
import { appReducerMap } from './model/app.reducer';
import { initAppState } from './model/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { FlightEffect } from './flight-booking/model/flight.effect';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FlightBookingModule,
    RouterModule.forRoot(APP_ROUTES),
    SharedModule,
    StoreModule.forRoot(appReducerMap, { initialState: initAppState }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([FlightEffect])
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    BasketComponent
  ],
  providers: [
    EventService,
    { provide: BASE_URL, useValue: 'http://www.angular.at/api'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
