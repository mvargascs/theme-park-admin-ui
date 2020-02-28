import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportAttractionsComponent } from './import-attractions.component';

describe('ImportAttractionsComponent', () => {
  let component: ImportAttractionsComponent;
  let fixture: ComponentFixture<ImportAttractionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportAttractionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportAttractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
