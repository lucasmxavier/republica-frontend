import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepublicaReceitaDespesaListComponent } from './republica-receita-despesa-list.component';

describe('RepublicaReceitaDespesaListComponent', () => {
  let component: RepublicaReceitaDespesaListComponent;
  let fixture: ComponentFixture<RepublicaReceitaDespesaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepublicaReceitaDespesaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepublicaReceitaDespesaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
