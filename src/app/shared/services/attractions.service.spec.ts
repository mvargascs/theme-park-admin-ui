import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { Attraction } from '@shared/models/attraction';

import { attractions } from '@testing/data/attractions';
import { angularFireAuthStub } from '@testing/data/auth';

import { AttractionsService } from './attractions.service';

const collectionStub = {
  valueChanges: jasmine.createSpy('valueChanges').and.returnValue(attractions)
};

const angularFirestoreStub = {
  collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
};

describe('AttractionsService', () => {
  let service: AttractionsService;
  let angularFirestore: AngularFirestore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AttractionsService,
        { provide: AngularFireAuth, useValue: angularFireAuthStub },
        { provide: AngularFirestore, useValue: angularFirestoreStub }
      ]
    });

    service = TestBed.inject(AttractionsService);
    angularFirestore = TestBed.inject(AngularFirestore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
