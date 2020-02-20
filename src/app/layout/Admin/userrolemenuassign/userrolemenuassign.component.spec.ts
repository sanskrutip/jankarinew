import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserrolemenuassignComponent } from './userrolemenuassign.component';

describe('UserrolemenuassignComponent', () => {
  let component: UserrolemenuassignComponent;
  let fixture: ComponentFixture<UserrolemenuassignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserrolemenuassignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserrolemenuassignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
