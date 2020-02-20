import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserroledetailsComponent } from './userroledetails.component';

describe('UserroledetailsComponent', () => {
  let component: UserroledetailsComponent;
  let fixture: ComponentFixture<UserroledetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserroledetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserroledetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
