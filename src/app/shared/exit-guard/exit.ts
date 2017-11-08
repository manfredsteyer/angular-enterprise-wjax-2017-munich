

import { Observable } from 'rxjs/Observable';
export interface Exit {
  canExit(): Observable<boolean>;
}
