import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeofpayComponent } from './modeofpay.component';

describe('ModeofpayComponent', () => {
  let component: ModeofpayComponent;
  let fixture: ComponentFixture<ModeofpayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeofpayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeofpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
