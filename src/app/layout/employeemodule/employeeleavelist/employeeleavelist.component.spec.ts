import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeleavelistComponent } from './employeeleavelist.component';

describe('EmployeeleavelistComponent', () => {
  let component: EmployeeleavelistComponent;
  let fixture: ComponentFixture<EmployeeleavelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeleavelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeleavelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
