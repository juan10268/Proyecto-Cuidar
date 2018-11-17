import { TestBed, inject } from '@angular/core/testing';

import { VinculacionService } from './vinculacion.service';

describe('VinculacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VinculacionService]
    });
  });

  it('should be created', inject([VinculacionService], (service: VinculacionService) => {
    expect(service).toBeTruthy();
  }));
});
