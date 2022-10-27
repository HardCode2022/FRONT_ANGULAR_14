import { TestBed } from '@angular/core/testing';

import { DetailGuardGuard } from './detail-guard.guard';

describe('DetailGuardGuard', () => {
  let guard: DetailGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DetailGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
