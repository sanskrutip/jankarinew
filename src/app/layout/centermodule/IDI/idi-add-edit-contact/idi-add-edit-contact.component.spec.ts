import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiAddEditContactComponent } from './idi-add-edit-contact.component';

describe('IdiAddEditContactComponent', () => {
  let component: IdiAddEditContactComponent;
  let fixture: ComponentFixture<IdiAddEditContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdiAddEditContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiAddEditContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
