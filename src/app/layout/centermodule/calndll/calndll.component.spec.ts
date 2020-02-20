import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalndllComponent } from './calndll.component';

describe('CalndllComponent', () => {
  let component: CalndllComponent;
  let fixture: ComponentFixture<CalndllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalndllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalndllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
