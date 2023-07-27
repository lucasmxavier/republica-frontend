import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoradorTarefaComponent } from './morador-tarefa.component';

describe('MoradorTarefaComponent', () => {
  let component: MoradorTarefaComponent;
  let fixture: ComponentFixture<MoradorTarefaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoradorTarefaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoradorTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
