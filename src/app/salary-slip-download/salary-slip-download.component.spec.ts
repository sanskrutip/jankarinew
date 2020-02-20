import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarySlipDownloadComponent } from './salary-slip-download.component';

describe('SalarySlipDownloadComponent', () => {
  let component: SalarySlipDownloadComponent;
  let fixture: ComponentFixture<SalarySlipDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalarySlipDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarySlipDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
