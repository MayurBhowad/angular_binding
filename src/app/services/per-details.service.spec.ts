import { TestBed } from '@angular/core/testing';

import { PerDetailsService } from './per-details.service';

describe('PerDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerDetailsService = TestBed.get(PerDetailsService);
    expect(service).toBeTruthy();
  });
});
