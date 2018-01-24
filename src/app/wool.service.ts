import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Wool } from './wool';
import { WOOLS } from './mock-wool-list';
import { MessageService } from './message.service';

@Injectable()
export class WoolService {

//This is a typical "service-in-service" scenario: you inject the MessageService into the
//  WoolService which is injected into the WoolsComponent.
  constructor(private messageService: MessageService) { }

//Method to return the mock wool list.
//of(WOOLS) returns an Observable<Wool[]> that emits a single value, the array of mock wools.
  getWools(): Observable<Wool[]> {
    // Todo: send the message _after_ fetching the wools
    this.messageService.add('WoolService: fetched wools');
    return of(WOOLS);
  }

  getWool(id: number): Observable<Wool> {
  // Todo: send the message _after_ fetching the wool
    this.messageService.add(`WoolService: fetched wool id=${id}`);
    return of(WOOLS.find(wool => wool.id === id));
}


}
