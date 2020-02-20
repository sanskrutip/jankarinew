import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeleavereportComponent } from './employeeleavereport.component';

describe('EmployeeleavereportComponent', () => {
  let component: EmployeeleavereportComponent;
  let fixture: ComponentFixture<EmployeeleavereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeleavereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeleavereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
