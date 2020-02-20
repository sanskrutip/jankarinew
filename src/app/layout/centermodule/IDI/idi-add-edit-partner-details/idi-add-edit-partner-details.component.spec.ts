import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiAddEditPartnerDetailsComponent } from './idi-add-edit-partner-details.component';

describe('IdiAddEditPartnerDetailsComponent', () => {
  let component: IdiAddEditPartnerDetailsComponent;
  let fixture: ComponentFixture<IdiAddEditPartnerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdiAddEditPartnerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiAddEditPartnerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
