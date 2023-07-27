import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoradorListComponent } from './morador-list.component';

describe('MoradorListComponent', () => {
  let component: MoradorListComponent;
  let fixture: ComponentFixture<MoradorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoradorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoradorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
