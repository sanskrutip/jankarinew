import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPartnerdetailComponent } from './add-edit-partnerdetail.component';

describe('AddEditPartnerdetailComponent', () => {
  let component: AddEditPartnerdetailComponent;
  let fixture: ComponentFixture<AddEditPartnerdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditPartnerdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPartnerdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
