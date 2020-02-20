import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiAddEditCenterInfoComponent } from './idi-add-edit-center-info.component';

describe('IdiAddEditCenterInfoComponent', () => {
  let component: IdiAddEditCenterInfoComponent;
  let fixture: ComponentFixture<IdiAddEditCenterInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdiAddEditCenterInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiAddEditCenterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
