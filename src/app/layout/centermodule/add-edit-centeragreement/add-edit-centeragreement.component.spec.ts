import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCenteragreementComponent } from './add-edit-centeragreement.component';

describe('AddEditCenteragreementComponent', () => {
  let component: AddEditCenteragreementComponent;
  let fixture: ComponentFixture<AddEditCenteragreementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditCenteragreementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCenteragreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
