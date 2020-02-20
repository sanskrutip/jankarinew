import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldetailsComponent } from './saldetails.component';

describe('SaldetailsComponent', () => {
  let component: SaldetailsComponent;
  let fixture: ComponentFixture<SaldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
