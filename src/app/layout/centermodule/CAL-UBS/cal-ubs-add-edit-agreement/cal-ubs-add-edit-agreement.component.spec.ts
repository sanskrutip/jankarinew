import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalUbsAddEditAgreementComponent } from './cal-ubs-add-edit-agreement.component';

describe('CalUbsAddEditAgreementComponent', () => {
  let component: CalUbsAddEditAgreementComponent;
  let fixture: ComponentFixture<CalUbsAddEditAgreementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalUbsAddEditAgreementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalUbsAddEditAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
