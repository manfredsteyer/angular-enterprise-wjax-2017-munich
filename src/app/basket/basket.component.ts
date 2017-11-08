import { Component, OnDestroy } from '@angular/core';
import { Flight } from '../entities/flight';
import { Router } from "@angular/router";
import { EventService } from '../event.service';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnDestroy {


  flights: Array<Flight> = [];
  subscription: Subscription;
  closeSubject = new Subject<boolean>();

  constructor(private eventService: EventService) {
    this.subscription = eventService
                          .flightSelected
                          .takeUntil(this.closeSubject)
                          .subscribe(f => {
      if (!f) return;
      this.flights.push(f);

      if (this.flights.length > 3) {
        this.flights.splice(0,1);
      }
    });
  }


  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
    this.closeSubject.next(null);
  }


}
