import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusService } from '@shared/services/status.service';

import { MockStatusService } from '@testing/services/status.service';

import { StatusesComponent } from './statuses.component';

describe('StatusesComponent', () => {
  let component: StatusesComponent;
  let fixture: ComponentFixture<StatusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusesComponent ],
      providers: [
        { provide: StatusService, useClass: MockStatusService },
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
