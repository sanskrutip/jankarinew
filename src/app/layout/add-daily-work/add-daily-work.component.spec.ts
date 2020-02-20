import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDailyWorkComponent } from './add-daily-work.component';

describe('AddDailyWorkComponent', () => {
  let component: AddDailyWorkComponent;
  let fixture: ComponentFixture<AddDailyWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDailyWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDailyWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
