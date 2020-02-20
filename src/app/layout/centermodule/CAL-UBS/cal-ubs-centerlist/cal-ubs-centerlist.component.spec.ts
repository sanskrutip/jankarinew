import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CALUBSCenterlistComponent } from './cal-ubs-centerlist.component';

describe('CALUBSCenterlistComponent', () => {
  let component: CALUBSCenterlistComponent;
  let fixture: ComponentFixture<CALUBSCenterlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CALUBSCenterlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CALUBSCenterlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
