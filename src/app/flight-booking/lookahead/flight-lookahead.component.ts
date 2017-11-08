import { Flight } from '../../entities/flight';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

// Option 1: Alles einbinden
import 'rxjs';

// Option 2: Operatoren einzeln einbinden
/*
import "rxjs/add/observable/debounceTime";
import "rxjs/add/operator/do";
...
*/

@Component({
    selector: 'flight-lookahead',
    templateUrl: './flight-lookahead.component.html'
})
export class FlightLookaheadComponent implements OnInit {

    constructor(private http: HttpClient) {
    }

    control: FormControl;
    flights$: Observable<Flight[]>;
    loading: boolean = false;










    ngOnInit() {
        this.control = new FormControl();

        this.flights$ = this
                            .control
                            .valueChanges
                            .debounceTime(300)
                            .do(v => this.loading = true)
                            .switchMap(name => this.load(name))
                            .do(v => this.loading = false);
    }






    load(from: string): Observable<Flight[]>  {
        let url = "http://www.angular.at/api/flight";

        let params = new HttpParams()
                            .set('from', from);

        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        return this.http.get<Flight[]>(url, {params, headers});

    };


}
