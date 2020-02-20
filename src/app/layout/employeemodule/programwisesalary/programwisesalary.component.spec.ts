import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramwisesalaryComponent } from './programwisesalary.component';

describe('ProgramwisesalaryComponent', () => {
  let component: ProgramwisesalaryComponent;
  let fixture: ComponentFixture<ProgramwisesalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramwisesalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramwisesalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
