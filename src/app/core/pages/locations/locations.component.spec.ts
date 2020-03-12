import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationService } from '@shared/services/location.service';

import { MockLocationService } from '@testing/services/location.service';

import { LocationsComponent } from './locations.component';

describe('LocationsComponent', () => {
  let component: LocationsComponent;
  let fixture: ComponentFixture<LocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationsComponent ],
      providers: [
        { provide: LocationService, useClass: MockLocationService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
