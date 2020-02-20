import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalUbsAddEditComphardwareComponent } from './cal-ubs-add-edit-comphardware.component';

describe('CalUbsAddEditComphardwareComponent', () => {
  let component: CalUbsAddEditComphardwareComponent;
  let fixture: ComponentFixture<CalUbsAddEditComphardwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalUbsAddEditComphardwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalUbsAddEditComphardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
