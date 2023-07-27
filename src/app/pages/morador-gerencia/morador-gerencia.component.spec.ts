import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoradorGerenciaComponent } from './morador-gerencia.component';

describe('MoradorGerenciaComponent', () => {
  let component: MoradorGerenciaComponent;
  let fixture: ComponentFixture<MoradorGerenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoradorGerenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoradorGerenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
