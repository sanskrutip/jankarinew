import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenattdetailsComponent } from './genattdetails.component';

describe('GenattdetailsComponent', () => {
  let component: GenattdetailsComponent;
  let fixture: ComponentFixture<GenattdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenattdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenattdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
