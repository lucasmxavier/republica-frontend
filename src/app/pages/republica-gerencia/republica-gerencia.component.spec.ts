import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepublicaGerenciaComponent } from './republica-gerencia.component';

describe('RepublicaGerenciaComponent', () => {
  let component: RepublicaGerenciaComponent;
  let fixture: ComponentFixture<RepublicaGerenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepublicaGerenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepublicaGerenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
