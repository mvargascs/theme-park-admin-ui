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

import { AttractionsService } from '@shared/services/attractions.service';

import { MockAttractionsService } from '@testing/services/attraction.service';

import { attractions } from '@testing/data/attractions';

import { AttractionsComponent } from './attractions.component';

const collectionStub = {
  valueChanges: jasmine.createSpy('valueChanges').and.returnValue(attractions)
};

const angularFirestoreStub = {
  collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
};

describe('AttractionsComponent', () => {
  let component: AttractionsComponent;
  let fixture: ComponentFixture<AttractionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AttractionsComponent
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
        { provide: AttractionsService, useClass: MockAttractionsService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
