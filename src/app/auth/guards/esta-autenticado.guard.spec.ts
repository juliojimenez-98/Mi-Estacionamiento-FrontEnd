import { TestBed } from '@angular/core/testing';

import { EstaAutenticadoGuard } from './esta-autenticado.guard';

describe('EstaAutenticadoGuard', () => {
  let guard: EstaAutenticadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EstaAutenticadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
