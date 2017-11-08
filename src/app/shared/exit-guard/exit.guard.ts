
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Exit } from './exit';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ExitGuard
        implements CanDeactivate<Exit> {

  canDeactivate(component: Exit, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot):  Observable<boolean> {
    return component.canExit();
  }


}
