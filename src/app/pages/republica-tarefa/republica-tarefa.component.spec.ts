import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepublicaTarefaComponent } from './republica-tarefa.component';

describe('RepublicaTarefaComponent', () => {
  let component: RepublicaTarefaComponent;
  let fixture: ComponentFixture<RepublicaTarefaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepublicaTarefaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepublicaTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
