import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';

import { AttractionComponent } from './attraction.component';

const routeStub = { paramMap: of(convertToParamMap({ id: 'test' })) };

describe('AttractionComponent', () => {
  let component: AttractionComponent;
  let fixture: ComponentFixture<AttractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttractionComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: routeStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
