import { TestBed, inject } from '@angular/core/testing';

import { RangoSalarialService } from './rango-salarial.service';

describe('RangoSalarialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RangoSalarialService]
    });
  });

  it('should be created', inject([RangoSalarialService], (service: RangoSalarialService) => {
    expect(service).toBeTruthy();
  }));
});
