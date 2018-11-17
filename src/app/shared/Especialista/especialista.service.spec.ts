import { TestBed, inject } from '@angular/core/testing';

import { EspecialistaService } from './especialista.service';

describe('EspecialistaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EspecialistaService]
    });
  });

  it('should be created', inject([EspecialistaService], (service: EspecialistaService) => {
    expect(service).toBeTruthy();
  }));
});
