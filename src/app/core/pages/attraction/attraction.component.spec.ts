import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';

import { AttractionFormComponent } from '@shared/components/attraction-form/attraction-form.component';

import { AttractionsService } from '@shared/services/attractions.service';
import { LocationService } from '@shared/services/location.service';
import { StatusService } from '@shared/services/status.service';

import { MockAttractionsService } from '@testing/services/attraction.service';
import { MockLocationService } from '@testing/services/location.service';
import { MockStatusService } from '@testing/services/status.service';

import { mockRouter } from '@testing/data/router';

import { AttractionComponent } from './attraction.component';

const routeStub = { paramMap: of(convertToParamMap({ id: 'test' })) };

describe('AttractionComponent', () => {
  let component: AttractionComponent;
  let fixture: ComponentFixture<AttractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AttractionComponent,
        AttractionFormComponent,
      ],
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
        { provide: ActivatedRoute, useValue: routeStub },
        { provide: AttractionsService, useClass: MockAttractionsService },
        { provide: LocationService, useClass: MockLocationService },
        { provide: StatusService, useClass: MockStatusService },
        { provide: Router, useValue: mockRouter }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
