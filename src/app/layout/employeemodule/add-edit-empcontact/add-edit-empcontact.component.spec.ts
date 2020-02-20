import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEmpcontactComponent } from './add-edit-empcontact.component';

describe('AddEditEmpcontactComponent', () => {
  let component: AddEditEmpcontactComponent;
  let fixture: ComponentFixture<AddEditEmpcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditEmpcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEmpcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
