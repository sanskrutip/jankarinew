import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportmenuComponent } from './reportmenu.component';

describe('ReportmenuComponent', () => {
  let component: ReportmenuComponent;
  let fixture: ComponentFixture<ReportmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
