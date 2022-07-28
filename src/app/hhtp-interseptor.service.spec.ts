import { TestBed } from '@angular/core/testing';

import { HhtpInterseptorService } from './hhtp-interseptor.service';

describe('HhtpInterseptorService', () => {
  let service: HhtpInterseptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HhtpInterseptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
