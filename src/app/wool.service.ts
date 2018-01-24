import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Wool } from './wool';
import { WOOLS } from './mock-wool-list';
import { MessageService } from './message.service';

@Injectable()
export class WoolService {

//This is a typical "service-in-service" scenario: you inject the MessageService into the
//  HeroService which is injected into the HeroesComponent.
  constructor(private messageService: MessageService) { }

//Method to return the mock wool list.
//of(WOOLS) returns an Observable<Wool[]> that emits a single value, the array of mock wools.
  getWools(): Observable<Wool[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('WoolService: fetched wools');
    return of(WOOLS);
  }


}
