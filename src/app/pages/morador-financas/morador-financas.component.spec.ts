import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoradorFinancasComponent } from './morador-financas.component';

describe('MoradorFinanciasComponent', () => {
  let component: MoradorFinancasComponent;
  let fixture: ComponentFixture<MoradorFinancasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoradorFinancasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoradorFinancasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
