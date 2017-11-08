import { FlightState, initFlightState } from '../flight-booking/model/flight.state';

export interface AppState {
  flights: FlightState;
  otherThings: object;
}

export const initAppState: AppState = {
  flights: initFlightState,
  otherThings: {}
}
