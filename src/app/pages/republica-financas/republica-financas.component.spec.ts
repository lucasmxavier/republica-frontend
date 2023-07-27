import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepublicaFinancasComponent } from './republica-financas.component';

describe('RepublicaFinancasComponent', () => {
  let component: RepublicaFinancasComponent;
  let fixture: ComponentFixture<RepublicaFinancasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepublicaFinancasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepublicaFinancasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
