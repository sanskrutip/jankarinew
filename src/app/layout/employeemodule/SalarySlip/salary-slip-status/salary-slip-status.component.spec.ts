import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarySlipStatusComponent } from './salary-slip-status.component';

describe('SalarySlipStatusComponent', () => {
  let component: SalarySlipStatusComponent;
  let fixture: ComponentFixture<SalarySlipStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalarySlipStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarySlipStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
