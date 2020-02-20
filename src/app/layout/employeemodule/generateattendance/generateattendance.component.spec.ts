import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateattendanceComponent } from './generateattendance.component';

describe('GenerateattendanceComponent', () => {
  let component: GenerateattendanceComponent;
  let fixture: ComponentFixture<GenerateattendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateattendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
