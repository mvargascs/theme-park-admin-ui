import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { StatusFormComponent } from '@shared/components/forms/status-form/status-form.component';

import { StatusService } from '@shared/services/status.service';

import { MockStatusService } from '@testing/services/status.service';

import { mockRouter } from '@testing/data/router';

import { StatusComponent } from './status.component';

const routeStub = { paramMap: of(convertToParamMap({ id: 'test' })) };

describe('StatusComponent', () => {
  let component: StatusComponent;
  let fixture: ComponentFixture<StatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StatusComponent,
        StatusFormComponent,
      ],
      imports: [
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: routeStub },
        { provide: StatusService, useClass: MockStatusService },
        { provide: Router, useValue: mockRouter }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
