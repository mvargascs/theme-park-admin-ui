import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

import { LocationService } from '@shared/services/location.service';

import { LocationFormComponent } from '@shared/components/forms/location-form/location-form.component';

import { MockLocationService } from '@testing/services/location.service';

import { mockRouter } from '@testing/data/router';

import { LocationComponent } from './location.component';

const routeStub = { paramMap: of(convertToParamMap({ id: 'test' })) };

describe('LocationComponent', () => {
  let component: LocationComponent;
  let fixture: ComponentFixture<LocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LocationComponent,
        LocationFormComponent
      ],
      imports: [
        MatButtonModule,
        MatCardModule,
        MatDatepickerModule,
        MatInputModule,
        MatNativeDateModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: routeStub },
        { provide: LocationService, useClass: MockLocationService },
        { provide: Router, useValue: mockRouter }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
