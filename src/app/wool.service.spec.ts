import { TestBed, inject } from '@angular/core/testing';

import { WoolService } from './wool.service';

describe('WoolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WoolService]
    });
  });

  it('should be created', inject([WoolService], (service: WoolService) => {
    expect(service).toBeTruthy();
  }));
});
