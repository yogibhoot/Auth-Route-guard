import { TestBed } from '@angular/core/testing';

import { CuscanloadGuard } from './cuscanload.guard';

describe('CuscanloadGuard', () => {
  let guard: CuscanloadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CuscanloadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
