import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AttractionFormComponent } from '@shared/components/attraction-form/attraction-form.component';

import { AttractionsService } from '@shared/services/attractions.service';
import { LocationService } from '@shared/services/location.service';
import { StatusService } from '@shared/services/status.service';

import { MockAttractionsService } from '@testing/services/attraction.service';
import { MockLocationService } from '@testing/services/location.service';
import { MockStatusService } from '@testing/services/status.service';

import { mockRouter } from '@testing/data/router';

import { CreateAttractionComponent } from './create-attraction.component';

describe('CreateAttractionComponent', () => {
  let component: CreateAttractionComponent;
  let fixture: ComponentFixture<CreateAttractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AttractionFormComponent,
        CreateAttractionComponent
      ],
      imports: [
        ReactiveFormsModule,
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
    fixture = TestBed.createComponent(CreateAttractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
