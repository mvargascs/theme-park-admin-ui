import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AuthService } from '@shared/services/auth.service';

import { MockAuthService } from '@testing/services/auth.service';

import { CoreComponent } from './core.component';

describe('CoreComponent', () => {
  let component: CoreComponent;
  let fixture: ComponentFixture<CoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoreComponent
      ],
      imports: [
        MatButtonModule,
        MatToolbarModule,
        RouterTestingModule
      ],
      providers: [
        { provide: AuthService, useClass: MockAuthService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
