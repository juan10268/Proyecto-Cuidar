import { TestBed, inject } from '@angular/core/testing';

import { SalarialService } from './salarial.service';

describe('SalarialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalarialService]
    });
  });

  it('should be created', inject([SalarialService], (service: SalarialService) => {
    expect(service).toBeTruthy();
  }));
});
