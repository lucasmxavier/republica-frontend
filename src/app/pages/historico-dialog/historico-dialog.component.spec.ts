import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoDialogComponent } from './historico-dialog.component';

describe('HistoricoDialogComponent', () => {
  let component: HistoricoDialogComponent;
  let fixture: ComponentFixture<HistoricoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
