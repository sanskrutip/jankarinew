import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateperempattlistComponent } from './updateperempattlist.component';

describe('UpdateperempattlistComponent', () => {
  let component: UpdateperempattlistComponent;
  let fixture: ComponentFixture<UpdateperempattlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateperempattlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateperempattlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
