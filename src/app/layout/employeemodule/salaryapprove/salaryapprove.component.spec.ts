import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryapproveComponent } from './salaryapprove.component';

describe('SalaryapproveComponent', () => {
  let component: SalaryapproveComponent;
  let fixture: ComponentFixture<SalaryapproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryapproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryapproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
