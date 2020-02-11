import { TestBed } from '@angular/core/testing';

import { CreditoFiscalService } from './credito-fiscal.service';

describe('CreditoFiscalService', () => {
  let service: CreditoFiscalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditoFiscalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
