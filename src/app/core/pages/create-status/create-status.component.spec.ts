import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { StatusService } from '@shared/services/status.service';

import { MockStatusService } from '@testing/services/status.service';
import { mockRouter } from '@testing/data/router';

import { CreateStatusComponent } from './create-status.component';

describe('CreateStatusComponent', () => {
  let component: CreateStatusComponent;
  let fixture: ComponentFixture<CreateStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStatusComponent ],
      providers: [
        { provide: StatusService, useClass: MockStatusService },
        { provide: Router, useValue: mockRouter }
      ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
