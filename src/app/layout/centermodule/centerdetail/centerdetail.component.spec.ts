import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterdetailComponent } from './centerdetail.component';

describe('CenterdetailComponent', () => {
  let component: CenterdetailComponent;
  let fixture: ComponentFixture<CenterdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
