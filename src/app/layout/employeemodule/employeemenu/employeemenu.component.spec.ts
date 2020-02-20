import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeemenuComponent } from './employeemenu.component';

describe('EmployeemenuComponent', () => {
  let component: EmployeemenuComponent;
  let fixture: ComponentFixture<EmployeemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
