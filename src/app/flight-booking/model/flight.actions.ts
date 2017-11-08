
import { Action } from '@ngrx/store';
import { Flight } from '../../entities/flight';

export const FLIGHTS_LOADED_ACTION = 'FLIGHTS_LOADED_ACTION';

export const FLIGHTS_LOAD_ACTION = 'FLIGHTS_LOAD_ACTION';

export class FlightsLoadedAction implements Action {
  readonly type = FLIGHTS_LOADED_ACTION;
  constructor(readonly payload: Flight[]) {
  }
}

export class FlightsLoadAction implements  Action {
  readonly type = FLIGHTS_LOAD_ACTION;
  constructor(readonly payload: FlightsLoadPayload) {
  }
}

interface FlightsLoadPayload {
  from: string,
  to: string
}
