import { async, ComponentFixture, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';

import { AttractionFormComponent } from '@shared/components/forms/attraction-form/attraction-form.component';

import { AttractionsService } from '@shared/services/attractions.service';
import { LocationService } from '@shared/services/location.service';
import { StatusService } from '@shared/services/status.service';

import { MockAttractionsService } from '@testing/services/attraction.service';
import { MockLocationService } from '@testing/services/location.service';
import { MockStatusService } from '@testing/services/status.service';

import { routeStubWithoutIdParam, routeStubWithIdParam } from '@testing/stubs/params';

import { AttractionComponent } from './attraction.component';

describe('AttractionComponent', () => {
  let component: AttractionComponent;
  let fixture: ComponentFixture<AttractionComponent>;

  const moduleDef: TestModuleMetadata = {
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
      ReactiveFormsModule,
      RouterTestingModule
    ],
    providers: [
      { provide: AttractionsService, useClass: MockAttractionsService },
      { provide: LocationService, useClass: MockLocationService },
      { provide: StatusService, useClass: MockStatusService },
    ]
  };

  describe('When an Id is NOT provided in the url param', () => {
    beforeEach(async(() => {
      moduleDef.providers.push(
        { provide: ActivatedRoute, useValue: routeStubWithoutIdParam },
      );

      TestBed.configureTestingModule(moduleDef)
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(AttractionComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create without id param', () => {
      expect(component).toBeTruthy();
    });

    // it('should have an attraction form component', () => {
    //   expect(component).toBeTruthy();
    // });
  });

  describe('When an ID is provided in the url param', () => {
    beforeEach(async(() => {
      moduleDef.providers.push(
        { provide: ActivatedRoute, useValue: routeStubWithIdParam },
      );
      
      TestBed.configureTestingModule(moduleDef)
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(AttractionComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create with id param', () => {
      expect(component).toBeTruthy();
    });

    it('attraction id should equal id param', () => {
      expect(component.attractionId).toEqual('test');
    });
  });
});
