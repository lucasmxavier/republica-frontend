import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepublicaFormComponent } from './republica-form.component';

describe('RepublicaFormComponent', () => {
  let component: RepublicaFormComponent;
  let fixture: ComponentFixture<RepublicaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepublicaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepublicaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
