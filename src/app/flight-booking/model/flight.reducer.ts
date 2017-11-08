import { FlightState, FlightStatistics } from './flight.state';
import { Action } from '@ngrx/store';
import { Flight } from '../../entities/flight';
import { FLIGHTS_LOADED_ACTION, FlightsLoadedAction } from './flight.actions';

export function flightReducer(state: FlightState, action: Action): FlightState {

  switch(action.type) {
    case FLIGHTS_LOADED_ACTION:
      return flightsLoaded(state, action as FlightsLoadedAction);
    default:
      return state;
  }

}

function flightsLoaded(state: FlightState, flightsLoadedAction: FlightsLoadedAction): FlightState {

  let flights = flightsLoadedAction.payload;

  return {
    flights: flights,
    statistics: calcStats(flights)
  }

}

function calcStats(flights: Flight[]): FlightStatistics {
  return {
    countDelayed: flights.filter(f => f.delayed).length,
    countInTime: flights.filter(f => !f.delayed).length,
  }
}
