import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersalaryComponent } from './partnersalary.component';

describe('PartnersalaryComponent', () => {
  let component: PartnersalaryComponent;
  let fixture: ComponentFixture<PartnersalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
