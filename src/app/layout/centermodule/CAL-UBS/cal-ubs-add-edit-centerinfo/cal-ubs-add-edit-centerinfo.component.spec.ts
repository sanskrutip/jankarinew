import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalUbsAddEditCenterinfoComponent } from './cal-ubs-add-edit-centerinfo.component';

describe('CalUbsAddEditCenterinfoComponent', () => {
  let component: CalUbsAddEditCenterinfoComponent;
  let fixture: ComponentFixture<CalUbsAddEditCenterinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalUbsAddEditCenterinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalUbsAddEditCenterinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
