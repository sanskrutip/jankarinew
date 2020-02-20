import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEmpofficeComponent } from './add-edit-empoffice.component';

describe('AddEditEmpofficeComponent', () => {
  let component: AddEditEmpofficeComponent;
  let fixture: ComponentFixture<AddEditEmpofficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditEmpofficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEmpofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
