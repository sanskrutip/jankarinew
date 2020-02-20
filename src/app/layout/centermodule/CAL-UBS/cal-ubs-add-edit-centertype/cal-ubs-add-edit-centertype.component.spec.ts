import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalUbsAddEditCentertypeComponent } from './cal-ubs-add-edit-centertype.component';

describe('CalUbsAddEditCentertypeComponent', () => {
  let component: CalUbsAddEditCentertypeComponent;
  let fixture: ComponentFixture<CalUbsAddEditCentertypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalUbsAddEditCentertypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalUbsAddEditCentertypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
