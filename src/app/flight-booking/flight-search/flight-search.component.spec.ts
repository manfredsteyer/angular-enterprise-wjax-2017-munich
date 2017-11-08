import { async, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FlightBookingModule } from '../flight-booking.module';
import { FlightSearchComponent } from './flight-search.component';
import { BASE_URL } from '../../app.tokens';
import { Observable } from 'rxjs/Observable';
import { Flight } from '../../entities/flight';
import { FlightService } from './flight.service';

let flightServiceMock = {
  flights: [],
  load(from: string, to: string): void {
    this.flights = [
      { id: 1, from: 'Graz', to: 'Hamburg', date: 'jetzt' },
      { id: 2, from: 'Graz', to: 'Hamburg', date: 'dann' },
      { id: 3, from: 'Graz', to: 'Hamburg', date: 'dann einmal' }
    ];
  },
  findById(id: number): Observable<Flight> {
    return Observable.of({ id: 1, from: 'Graz', to: 'Hamburg', date: 'jetzt' });
  }
}

describe('FlightSearchComponent', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        FlightBookingModule
      ],
      providers: [
        { provide: BASE_URL, useValue: '' }
      ]
    }).compileComponents();

    TestBed.overrideComponent(FlightSearchComponent, {
      set: {
        providers: [
          {
            provide: FlightService,
            useValue: flightServiceMock
          }
        ]
      }
    }).compileComponents();

  }));

  it('should not have loaded flights initially', () => {
    let fscFixture = TestBed.createComponent(FlightSearchComponent);
    let comp = fscFixture.componentInstance;

    expect(comp.flights.length).toBe(0);
  });

  it('should not search for flights w/o from and to', () => {
    let fscFixture = TestBed.createComponent(FlightSearchComponent);
    let comp = fscFixture.componentInstance;

    comp.from = '';
    comp.to = '';
    comp.search();
    expect(comp.flights.length).toBe(0);
  });

  it('should search for flights w/ from and to', () => {
    let fscFixture = TestBed.createComponent(FlightSearchComponent);
    let comp = fscFixture.componentInstance;

    comp.from = 'Hamburg';
    comp.to = 'Graz';
    comp.search();
    expect(comp.flights.length).toBe(3);
  });

});
