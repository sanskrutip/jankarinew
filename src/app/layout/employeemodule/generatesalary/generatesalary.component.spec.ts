import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratesalaryComponent } from './generatesalary.component';

describe('GeneratesalaryComponent', () => {
  let component: GeneratesalaryComponent;
  let fixture: ComponentFixture<GeneratesalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratesalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratesalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
