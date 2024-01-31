import { TestBed } from '@angular/core/testing';

import { ConectaService } from './conecta.service';

describe('ConectaService', () => {
  let service: ConectaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConectaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
