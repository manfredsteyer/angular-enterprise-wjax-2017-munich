import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flight } from "app/entities/flight";
import { FlightService } from "app/flight-booking/flight-search/flight.service";
import { Exit } from '../../shared/exit-guard/exit';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'flight-edit',
  templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent implements OnInit, Exit {

  exitInfo = {
    sender: null,
    showWarning: false
  }

  decide(decision: boolean): void {
    this.exitInfo.sender.next(decision);
    this.exitInfo.sender.complete();
    this.exitInfo.showWarning = false;
  }

  canExit(): Observable<boolean> {
    return Observable.create((sender: Observer<boolean>) => {
      this.exitInfo.sender = sender;
      this.exitInfo.showWarning = true;
    });
  }

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService) {
  }

  id: string;
  showDetails: string;
  flight: Flight;
  message: string;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.showDetails = params['showDetails'];
    });

  }

}
