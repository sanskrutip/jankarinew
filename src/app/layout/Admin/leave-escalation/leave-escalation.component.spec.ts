import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveEscalationComponent } from './leave-escalation.component';

describe('LeaveEscalationComponent', () => {
  let component: LeaveEscalationComponent;
  let fixture: ComponentFixture<LeaveEscalationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveEscalationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveEscalationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
