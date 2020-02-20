import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditComputerhardwareComponent } from './add-edit-computerhardware.component';

describe('AddEditComputerhardwareComponent', () => {
  let component: AddEditComputerhardwareComponent;
  let fixture: ComponentFixture<AddEditComputerhardwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditComputerhardwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditComputerhardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
