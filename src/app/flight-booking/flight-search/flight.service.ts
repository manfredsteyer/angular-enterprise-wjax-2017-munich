
import { Observable } from 'rxjs';
import { Flight } from '../../entities/flight';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { BASE_URL } from '../../app.tokens';
// import 'rxjs/add/operator/connect';
import 'rxjs';
import { AppState } from '../../model/app.state';
import { Store } from '@ngrx/store';
import { FlightsLoadedAction } from '../model/flight.actions';

@Injectable()
export class FlightService {

  constructor(
    private http: HttpClient,
    private store: Store<AppState>,
    @Inject(BASE_URL) private baseUrl: string) {
  }

  flights: Flight[] = [];

  delay(): void {

    const ONE_MINUTE = 1000 * 60;

    if (this.flights.length == 0) return;

    let f = this.flights[0];
    let date = new Date(f.date);
    date.setTime(date.getTime() + 15 * ONE_MINUTE)
    f.date = date.toISOString();

  }

  load(from: string, to: string): void {

    let url = this.baseUrl + '/flight';

    let params = new HttpParams()
                        .set('from', from)
                        .set('to', to);

    let headers = new HttpHeaders()
                        .set('Accept', 'application/json');

    this
        .http
        .get<Flight[]>(url, {params, headers})
        .subscribe(
          flights => {
            this.flights = flights;
            this.store.dispatch(new FlightsLoadedAction(flights));
          },
          err => {
            console.error(err)
          }
        );


  }

  find(from: string, to: string): Observable<Flight[]> {

    let url = this.baseUrl + '/flight';

    let params = new HttpParams()
                      .set('from', from)
                      .set('to', to);

    let headers = new HttpHeaders()
                      .set('Accept', 'application/json');

    return this
        .http
        .get<Flight[]>(url, {headers, params});
  }


  findById(id: string): Observable<Flight> {

    let url = this.baseUrl + '/flight';

    let params = new HttpParams()
                      .set('id', id);

    let headers = new HttpHeaders()
                        .set('Accept', 'application/json');
    return this
            .http
            .get<Flight>(url, {headers, params});
  }

  save(flight: Flight): Observable<Flight> {

    let url = this.baseUrl + '/flight';

    let headers = new HttpHeaders()
                        .set('Accept', 'application/json');

    return this
            .http
            .post<Flight>(url, flight, {headers});
  }

}
