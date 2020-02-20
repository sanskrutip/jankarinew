import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCenterContactComponent } from './add-edit-center-contact.component';

describe('AddEditCenterContactComponent', () => {
  let component: AddEditCenterContactComponent;
  let fixture: ComponentFixture<AddEditCenterContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditCenterContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCenterContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
