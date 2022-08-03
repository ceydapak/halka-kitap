/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HalkaApiService } from './halka-api.service';

describe('Service: HalkaApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HalkaApiService]
    });
  });

  it('should ...', inject([HalkaApiService], (service: HalkaApiService) => {
    expect(service).toBeTruthy();
  }));
});
