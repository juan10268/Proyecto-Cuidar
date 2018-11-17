import { TestBed, inject } from '@angular/core/testing';

import { TipoAntecedentesService } from './tipo-antecedentes.service';

describe('TipoAntecedentesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoAntecedentesService]
    });
  });

  it('should be created', inject([TipoAntecedentesService], (service: TipoAntecedentesService) => {
    expect(service).toBeTruthy();
  }));
});
