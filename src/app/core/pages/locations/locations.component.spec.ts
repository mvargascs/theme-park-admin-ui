import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CdkTableModule } from '@angular/cdk/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { LocationService } from '@shared/services/location.service';

import { TimestampToDatePipe } from '@shared/pipe/timestamp-to-date.pipe';

import { MockLocationService } from '@testing/services/location.service';

import { LocationsComponent } from './locations.component';

describe('LocationsComponent', () => {
  let component: LocationsComponent;
  let fixture: ComponentFixture<LocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LocationsComponent,
        TimestampToDatePipe,
      ],
      imports: [
        CdkTableModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatSortModule,
        MatTableModule,
        NoopAnimationsModule,
      ],
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
