import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalUbsAddEditInfraComponent } from './cal-ubs-add-edit-infra.component';

describe('CalUbsAddEditInfraComponent', () => {
  let component: CalUbsAddEditInfraComponent;
  let fixture: ComponentFixture<CalUbsAddEditInfraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalUbsAddEditInfraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalUbsAddEditInfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
