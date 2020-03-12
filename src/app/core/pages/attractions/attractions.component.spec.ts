import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { AttractionsService } from '@shared/services/attractions.service';

import { attractions } from '@testing/data/attractions';
import { mockRouter } from '@testing/data/router';

import { AttractionsComponent } from './attractions.component';
import { MockAttractionsService } from '@testing/services/attraction.service';

const collectionStub = {
  valueChanges: jasmine.createSpy('valueChanges').and.returnValue(attractions)
};

const angularFirestoreStub = {
  collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
};

describe('AttractionsComponent', () => {
  let component: AttractionsComponent;
  let fixture: ComponentFixture<AttractionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttractionsComponent ],
      providers: [
        { provide: AttractionsService, useClass: MockAttractionsService },
        { provide: Router, useValue: mockRouter }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
