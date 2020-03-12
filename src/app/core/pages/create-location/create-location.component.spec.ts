import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { LocationService } from '@shared/services/location.service';

import { angularFireAuthStub } from '@testing/data/auth';
import { locations } from '@testing/data/locations';
import { mockRouter } from '@testing/data/router';

import { CreateLocationComponent } from './create-location.component';

const collectionStub = {
  valueChanges: jasmine.createSpy('valueChanges').and.returnValue(locations)
};

const angularFirestoreStub = {
  collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
};

describe('CreateLocationComponent', () => {
  let component: CreateLocationComponent;
  let fixture: ComponentFixture<CreateLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLocationComponent ],
      providers: [
        LocationService,
        { provide: AngularFireAuth, useValue: angularFireAuthStub },
        { provide: AngularFirestore, useValue: angularFirestoreStub },
        { provide: Router, useValue: mockRouter }
      ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
