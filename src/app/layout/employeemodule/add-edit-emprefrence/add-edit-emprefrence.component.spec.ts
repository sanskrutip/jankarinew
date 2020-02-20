import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEmprefrenceComponent } from './add-edit-emprefrence.component';

describe('AddEditEmprefrenceComponent', () => {
  let component: AddEditEmprefrenceComponent;
  let fixture: ComponentFixture<AddEditEmprefrenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditEmprefrenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEmprefrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
