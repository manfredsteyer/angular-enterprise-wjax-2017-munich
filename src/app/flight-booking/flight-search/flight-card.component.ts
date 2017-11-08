
import { Component, Input, EventEmitter, Output, OnInit, OnChanges, SimpleChanges, ElementRef, NgZone } from '@angular/core';
import { Flight } from '../../entities/flight';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html'
})
export class FlightCardComponent {

  @Input() item: Flight;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  select() {
    this.selected = true;
    this.selectedChange.next(/* $event= */ this.selected);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.next(this.selected);
  }



}
