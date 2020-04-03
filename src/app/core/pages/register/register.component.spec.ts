import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { AuthService } from '@shared/services/auth.service';

import { MockAuthService } from '@testing/services/auth.service';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let router: Router;
  let navigateSpy: jasmine.Spy<Router["navigate"]>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RegisterComponent
      ],
      providers: [
        { provide: AuthService, useClass: MockAuthService },
      ],
      imports: [
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    navigateSpy = spyOn(router, 'navigate');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
