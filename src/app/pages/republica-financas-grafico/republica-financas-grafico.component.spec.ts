import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepublicaFinancasGraficoComponent } from './republica-financas-grafico.component';

describe('RepublicaFinancasGraficoComponent', () => {
  let component: RepublicaFinancasGraficoComponent;
  let fixture: ComponentFixture<RepublicaFinancasGraficoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepublicaFinancasGraficoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepublicaFinancasGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
