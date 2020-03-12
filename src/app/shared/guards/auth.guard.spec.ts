import { TestBed, async, inject } from '@angular/core/testing';
import { Router } from '@angular/router';

import { AuthService } from '@shared/services/auth.service';

import { MockAuthService } from '@testing/services/auth.service';
import { mockRouter } from '@testing/data/router';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthService, useClass: MockAuthService },
        { provide: Router, useValue: mockRouter }
      ]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
