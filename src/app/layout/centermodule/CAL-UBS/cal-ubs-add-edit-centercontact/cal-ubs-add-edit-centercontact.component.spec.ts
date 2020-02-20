import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalUbsAddEditCentercontactComponent } from './cal-ubs-add-edit-centercontact.component';

describe('CalUbsAddEditCentercontactComponent', () => {
  let component: CalUbsAddEditCentercontactComponent;
  let fixture: ComponentFixture<CalUbsAddEditCentercontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalUbsAddEditCentercontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalUbsAddEditCentercontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
