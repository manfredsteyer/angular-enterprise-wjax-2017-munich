import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { FlightService } from './flight.service';
import { Flight } from '../../entities/flight';
import { NgForm } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { EventService } from '../../event.service';
import { AppState } from '../../model/app.state';
import { Store } from '@ngrx/store';
import { FlightStatistics } from '../model/flight.state';
import { FlightsLoadAction } from '../model/flight.actions';

@Component({
  selector: 'flight-search',
  templateUrl: 'flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent {

  flights$: Observable<Flight[]>;

  constructor(
    private store: Store<AppState>,
    private eventService: EventService,
    private flightService: FlightService) {

    this.flights$ = this.store.select(s => s.flights.flights);
  }

  search(): void {

      if (!this.from || !this.to) return;
      this.store.dispatch(new FlightsLoadAction({ from: this.from, to: this.to }));

  }












  from: string;
  to: string;
  selectedFlight: Flight;

  basket: any = {
    "3": true,
    "4": false,
    "5": true
  };


  select(f: Flight, selected: boolean) {

    this.basket[f.id] = selected;
    if (selected) {
      this.eventService.flightSelected.next(f);
    }
  }














  // Noch nicht auf Redux umgestellt


  delay(): void {
    this.flightService.delay();
  }

  get flights() {
    return this.flightService.flights;
  }


}
