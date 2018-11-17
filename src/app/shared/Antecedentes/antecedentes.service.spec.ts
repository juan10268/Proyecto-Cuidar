import { TestBed, inject } from '@angular/core/testing';

import { AntecedentesService } from './antecedentes.service';

describe('AntecedentesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AntecedentesService]
    });
  });

  it('should be created', inject([AntecedentesService], (service: AntecedentesService) => {
    expect(service).toBeTruthy();
  }));
});
