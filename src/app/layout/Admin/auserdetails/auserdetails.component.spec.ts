import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuserdetailsComponent } from './auserdetails.component';

describe('AuserdetailsComponent', () => {
  let component: AuserdetailsComponent;
  let fixture: ComponentFixture<AuserdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuserdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
