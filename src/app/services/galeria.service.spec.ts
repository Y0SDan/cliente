import { TestBed } from '@angular/core/testing';

import { GaleriaService } from './galeria.service';

describe('GaleriaService', () => {
  let service: GaleriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GaleriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
