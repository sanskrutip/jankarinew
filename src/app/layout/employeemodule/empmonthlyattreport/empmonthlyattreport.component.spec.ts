import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpmonthlyattreportComponent } from './empmonthlyattreport.component';

describe('EmpmonthlyattreportComponent', () => {
  let component: EmpmonthlyattreportComponent;
  let fixture: ComponentFixture<EmpmonthlyattreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpmonthlyattreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpmonthlyattreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
