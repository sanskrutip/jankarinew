import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadattendanceComponent } from './uploadattendance.component';

describe('UploadattendanceComponent', () => {
  let component: UploadattendanceComponent;
  let fixture: ComponentFixture<UploadattendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadattendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
