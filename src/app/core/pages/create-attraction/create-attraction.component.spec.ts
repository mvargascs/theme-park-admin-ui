import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAttractionComponent } from './create-attraction.component';

describe('CreateAttractionComponent', () => {
  let component: CreateAttractionComponent;
  let fixture: ComponentFixture<CreateAttractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAttractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAttractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
