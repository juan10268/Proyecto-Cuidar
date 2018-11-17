import { TestBed, inject } from '@angular/core/testing';

import { EscolaridadService } from './escolaridad.service';

describe('EscolaridadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EscolaridadService]
    });
  });

  it('should be created', inject([EscolaridadService], (service: EscolaridadService) => {
    expect(service).toBeTruthy();
  }));
});
