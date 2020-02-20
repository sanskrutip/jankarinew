import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCenterTypeComponent } from './add-edit-center-type.component';

describe('AddEditCenterTypeComponent', () => {
  let component: AddEditCenterTypeComponent;
  let fixture: ComponentFixture<AddEditCenterTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditCenterTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCenterTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
