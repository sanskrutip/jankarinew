import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualgrosssalaryComponent } from './annualgrosssalary.component';

describe('AnnualgrosssalaryComponent', () => {
  let component: AnnualgrosssalaryComponent;
  let fixture: ComponentFixture<AnnualgrosssalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualgrosssalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualgrosssalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
