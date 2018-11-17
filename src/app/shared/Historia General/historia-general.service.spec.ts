import { TestBed, inject } from '@angular/core/testing';

import { HistoriaGeneralService } from './historia-general.service';

describe('HistoriaGeneralService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HistoriaGeneralService]
    });
  });

  it('should be created', inject([HistoriaGeneralService], (service: HistoriaGeneralService) => {
    expect(service).toBeTruthy();
  }));
});
