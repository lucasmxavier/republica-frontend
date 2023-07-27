import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RepublicadisponivelListComponent } from "./republica-disponivel-list.component";

describe("RepublicadisponivelListComponent", () => {
  let component: RepublicadisponivelListComponent;
  let fixture: ComponentFixture<RepublicadisponivelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RepublicadisponivelListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepublicadisponivelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
