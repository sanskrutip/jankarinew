import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepwiseempattlistComponent } from './depwiseempattlist.component';

describe('DepwiseempattlistComponent', () => {
  let component: DepwiseempattlistComponent;
  let fixture: ComponentFixture<DepwiseempattlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepwiseempattlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepwiseempattlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
