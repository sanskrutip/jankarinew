import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEmpqulificationComponent } from './add-edit-empqulification.component';

describe('AddEditEmpqulificationComponent', () => {
  let component: AddEditEmpqulificationComponent;
  let fixture: ComponentFixture<AddEditEmpqulificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditEmpqulificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEmpqulificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
