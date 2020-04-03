import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CdkTableModule } from '@angular/cdk/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { StatusService } from '@shared/services/status.service';

import { MockStatusService } from '@testing/services/status.service';

import { mockRouter } from '@testing/data/router';

import { StatusesComponent } from './statuses.component';

describe('StatusesComponent', () => {
  let component: StatusesComponent;
  let fixture: ComponentFixture<StatusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StatusesComponent
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
        { provide: StatusService, useClass: MockStatusService },
        { provide: Router, useValue: mockRouter }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
