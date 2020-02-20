import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyWorkSummaryComponent } from './daily-work-summary.component';

describe('DailyWorkSummaryComponent', () => {
  let component: DailyWorkSummaryComponent;
  let fixture: ComponentFixture<DailyWorkSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyWorkSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyWorkSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
