import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalUbsAddEditSancharakdetailComponent } from './cal-ubs-add-edit-sancharakdetail.component';

describe('CalUbsAddEditSancharakdetailComponent', () => {
  let component: CalUbsAddEditSancharakdetailComponent;
  let fixture: ComponentFixture<CalUbsAddEditSancharakdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalUbsAddEditSancharakdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalUbsAddEditSancharakdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
