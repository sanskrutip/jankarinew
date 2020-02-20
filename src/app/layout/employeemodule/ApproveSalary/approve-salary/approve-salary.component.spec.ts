import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveSalaryComponent } from './approve-salary.component';

describe('ApproveSalaryComponent', () => {
  let component: ApproveSalaryComponent;
  let fixture: ComponentFixture<ApproveSalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveSalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
