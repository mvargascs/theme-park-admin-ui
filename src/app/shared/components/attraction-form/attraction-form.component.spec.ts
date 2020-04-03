import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';

import { LocationService } from '@shared/services/location.service';
import { AttractionsService } from '@shared/services/attractions.service';
import { StatusService } from '@shared/services/status.service';

import { MockAttractionsService } from '@testing/services/attraction.service';
import { MockLocationService } from '@testing/services/location.service';
import { MockStatusService } from '@testing/services/status.service';

import { mockRouter } from '@testing/data/router';

import { AttractionFormComponent } from './attraction-form.component';

describe('AttractionFormComponent', () => {
  let component: AttractionFormComponent;
  let fixture: ComponentFixture<AttractionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttractionFormComponent ],
      imports: [
        MatButtonModule,
        MatCardModule,
        MatDatepickerModule,
        MatInputModule,
        MatMenuModule,
        MatNativeDateModule,
        MatSelectModule,
        MatSliderModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: AttractionsService, useClass: MockAttractionsService },
        { provide: LocationService, useClass: MockLocationService },
        { provide: StatusService, useClass: MockStatusService },
        { provide: Router, useValue: mockRouter }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttractionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
