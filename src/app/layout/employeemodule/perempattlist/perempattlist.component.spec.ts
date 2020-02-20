import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerempattlistComponent } from './perempattlist.component';

describe('PerempattlistComponent', () => {
  let component: PerempattlistComponent;
  let fixture: ComponentFixture<PerempattlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerempattlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerempattlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
