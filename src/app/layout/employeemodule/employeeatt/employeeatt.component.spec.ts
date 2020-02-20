import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeattComponent } from './employeeatt.component';

describe('EmployeeattComponent', () => {
  let component: EmployeeattComponent;
  let fixture: ComponentFixture<EmployeeattComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeattComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeattComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
