import { Routes, RouterModule } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { DelayResolver } from "app/shared/tools/delay.resolver";
import { AuthGuard } from '../shared/auth/auth.guard';
import { ExitGuard } from '../shared/exit-guard/exit.guard';
import { FlightLookaheadComponent } from './lookahead/flight-lookahead.component';

export const FLIGHT_BOOKING_ROUTES: Routes = [
      {
        path: '',
        redirectTo: 'flight-search',
        pathMatch: 'full'
      },
      {
        path: 'flight-search',
        component: FlightSearchComponent
      },
      {
        path: 'flight-edit/:id',
        component: FlightEditComponent
      },
      {
        path: 'passenger-search',
        component: PassengerSearchComponent
      },
      {
        path: 'flight-lookahead',
        component: FlightLookaheadComponent
      }
];

