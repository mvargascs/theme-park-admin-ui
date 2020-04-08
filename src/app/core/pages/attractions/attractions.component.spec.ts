import { async, ComponentFixture, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatInputHarness } from '@angular/material/input/testing';
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
import { Type } from '@angular/core';

describe('AttractionsComponent', () => {
  let component: AttractionsComponent;
  let service: AttractionsService;
  let element: HTMLElement;
  let loader: HarnessLoader;
  let fixture: ComponentFixture<AttractionsComponent>;

  const moduleDef: TestModuleMetadata = {
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
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule(moduleDef)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttractionsComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get<AttractionsService>(AttractionsService as Type<AttractionsService>);
    loader = TestbedHarnessEnvironment.loader(fixture);
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('displayedColumns should have appropriate columns', () => {
    const expectedColumns = ['name', 'waittime', 'location', 'quicklane', 'status', 'more'];
    expect(component.displayedColumns).toEqual(expectedColumns);
  });

  it('datasource should have data', () => {
    const expectedDataLength = 3;
    expect(component.dataSource.data.length).toBe(expectedDataLength);
  });

  it('datasource should have instance of MatSort', () => {
    expect(component.dataSource.sort).not.toBe(null);
  });

  describe('deleteAttraction()', () => {
    it('should call delete attraction in attraction service', () => {
      spyOn(service, 'deleteAttraction');
      component.deleteAttraction(attractions[0]);
      expect(service.deleteAttraction).toHaveBeenCalled();
    });
  });

  describe('addDefaultAttractions()', () => {
    it('should call add default attractions in attraction service', () => {
      spyOn(service, 'addDefaultAttractions');
      component.addDefaultAttractions();
      expect(service.addDefaultAttractions).toHaveBeenCalled();
    });
  });

  describe('applyFilter()', () => {
    it('should apply filter to datasource', () => {
      const filterValue = ' filterSTRING ';
      component.applyFilter(filterValue);
      expect(component.dataSource.filter).toBe(filterValue.trim().toLowerCase());
    });
  });

  describe('HTML Template', () => {
    it('should have a search card', () => {
      const el = element.querySelector('#searchCard');
      expect(el).not.toBe(null);
    });

    it('should have an attractions table card', () => {
      const el = element.querySelector('#attractionsTableCard');
      expect(el).not.toBe(null);
    });

    describe('Search Card', () => {
    });

    describe('Attractions Table Card', () => {
    });
  });
});
