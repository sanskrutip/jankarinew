import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEmpsalaryComponent } from './add-edit-empsalary.component';

describe('AddEditEmpsalaryComponent', () => {
  let component: AddEditEmpsalaryComponent;
  let fixture: ComponentFixture<AddEditEmpsalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditEmpsalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEmpsalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
