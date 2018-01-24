import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Wool } from './wool';
import { WOOLS } from './mock-wool-list';

@Injectable()
export class WoolService {

  constructor() { }

//Method to return the mock wool list.
//of(WOOLS) returns an Observable<Wool[]> that emits a single value, the array of mock wools.
  getWools(): Observable<Wool[]> {
      return of(WOOLS);
  }


}
