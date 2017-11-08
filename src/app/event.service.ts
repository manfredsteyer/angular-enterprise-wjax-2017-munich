import { Injectable } from '@angular/core';
import { Flight } from './entities/flight';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class EventService {

  flightSelected = new ReplaySubject<Flight>();

  constructor() { }

}
