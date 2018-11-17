import { TestBed, inject } from '@angular/core/testing';

import { EstadoCitaService } from './estado-cita.service';

describe('EstadoCitaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstadoCitaService]
    });
  });

  it('should be created', inject([EstadoCitaService], (service: EstadoCitaService) => {
    expect(service).toBeTruthy();
  }));
});
