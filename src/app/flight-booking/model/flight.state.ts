import { Flight } from '../../entities/flight';

export interface FlightState {
  flights: Flight[];
  statistics: FlightStatistics;
}

export interface FlightStatistics {
  countInTime: number;
  countDelayed: number;
}

export const initFlightState: FlightState = {
  flights: [],
  statistics: {
    countDelayed: 0,
    countInTime: 0
  }
}
