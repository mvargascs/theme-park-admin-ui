import { TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { angularFireAuthStub } from '@testing/data/auth';
import { mockRouter } from '@testing/data/router';
import { user } from '@testing/data/user';

import { AuthService } from './auth.service';

const userDocStub = {
  valueChanges: jasmine.createSpy('valueChanges').and.returnValue(user)
};

const angularFirestoreStub = {
  doc: jasmine.createSpy('doc').and.returnValue(userDocStub)
};

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AngularFireAuth, useValue: angularFireAuthStub },
        { provide: AngularFirestore, useValue: angularFirestoreStub },
        { provide: Router, useValue: mockRouter }
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
