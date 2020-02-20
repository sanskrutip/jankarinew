import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarySlipApprovalListComponent } from './salary-slip-approval-list.component';

describe('SalarySlipApprovalListComponent', () => {
  let component: SalarySlipApprovalListComponent;
  let fixture: ComponentFixture<SalarySlipApprovalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalarySlipApprovalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarySlipApprovalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
