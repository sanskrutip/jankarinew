import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalUbsAddEditOtherinfoComponent } from './cal-ubs-add-edit-otherinfo.component';

describe('CalUbsAddEditOtherinfoComponent', () => {
  let component: CalUbsAddEditOtherinfoComponent;
  let fixture: ComponentFixture<CalUbsAddEditOtherinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalUbsAddEditOtherinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalUbsAddEditOtherinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
