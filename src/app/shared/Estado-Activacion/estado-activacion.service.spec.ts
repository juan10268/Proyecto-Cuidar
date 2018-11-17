import { TestBed, inject } from '@angular/core/testing';

import { EstadoActivacionService } from './estado-activacion.service';

describe('EstadoActivacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstadoActivacionService]
    });
  });

  it('should be created', inject([EstadoActivacionService], (service: EstadoActivacionService) => {
    expect(service).toBeTruthy();
  }));
});
