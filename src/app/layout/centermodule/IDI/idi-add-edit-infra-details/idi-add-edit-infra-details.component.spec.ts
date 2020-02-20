import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiAddEditInfraDetailsComponent } from './idi-add-edit-infra-details.component';

describe('IdiAddEditInfraDetailsComponent', () => {
  let component: IdiAddEditInfraDetailsComponent;
  let fixture: ComponentFixture<IdiAddEditInfraDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdiAddEditInfraDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiAddEditInfraDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
