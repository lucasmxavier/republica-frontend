import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacaoListDialogComponent } from './notificacao-list-dialog.component';

describe('NotificacaoListDialogComponent', () => {
  let component: NotificacaoListDialogComponent;
  let fixture: ComponentFixture<NotificacaoListDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificacaoListDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacaoListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
