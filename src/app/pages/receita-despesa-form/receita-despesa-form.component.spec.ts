import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaDespesaFormComponent } from './receita-despesa-form.component';

describe('ReceitaDespesaFormComponent', () => {
  let component: ReceitaDespesaFormComponent;
  let fixture: ComponentFixture<ReceitaDespesaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitaDespesaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaDespesaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
