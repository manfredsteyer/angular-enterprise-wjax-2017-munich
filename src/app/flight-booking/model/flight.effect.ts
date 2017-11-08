import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { FlightService } from '../flight-search/flight.service';
import { FLIGHTS_LOAD_ACTION, FlightsLoadAction, FlightsLoadedAction } from './flight.actions';

@Injectable()
export class FlightEffect {

  constructor(
    private flightService: FlightService,
    private actions$: Actions) {

  }

  @Effect() flightsLoadEffect
              = this
                  .actions$
                  .ofType(FLIGHTS_LOAD_ACTION)
                  .switchMap( (a: FlightsLoadAction) => this.flightService.find(a.payload.from, a.payload.to))
                  .map(flights => new FlightsLoadedAction(flights));



}
