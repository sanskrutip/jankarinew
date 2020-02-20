import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEmpprogramComponent } from './add-edit-empprogram.component';

describe('AddEditEmpprogramComponent', () => {
  let component: AddEditEmpprogramComponent;
  let fixture: ComponentFixture<AddEditEmpprogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditEmpprogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEmpprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
