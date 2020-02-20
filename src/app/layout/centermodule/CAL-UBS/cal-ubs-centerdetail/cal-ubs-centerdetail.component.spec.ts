import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalUbsCenterdetailComponent } from './cal-ubs-centerdetail.component';

describe('CalUbsCenterdetailComponent', () => {
  let component: CalUbsCenterdetailComponent;
  let fixture: ComponentFixture<CalUbsCenterdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalUbsCenterdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalUbsCenterdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
