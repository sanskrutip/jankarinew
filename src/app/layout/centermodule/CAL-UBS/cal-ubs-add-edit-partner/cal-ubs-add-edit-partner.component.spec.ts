import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalUbsAddEditPartnerComponent } from './cal-ubs-add-edit-partner.component';

describe('CalUbsAddEditPartnerComponent', () => {
  let component: CalUbsAddEditPartnerComponent;
  let fixture: ComponentFixture<CalUbsAddEditPartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalUbsAddEditPartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalUbsAddEditPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
