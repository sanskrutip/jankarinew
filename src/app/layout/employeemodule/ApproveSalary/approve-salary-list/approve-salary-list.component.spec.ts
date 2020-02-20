import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveSalaryListComponent } from './approve-salary-list.component';

describe('ApproveSalaryListComponent', () => {
  let component: ApproveSalaryListComponent;
  let fixture: ComponentFixture<ApproveSalaryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveSalaryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveSalaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
