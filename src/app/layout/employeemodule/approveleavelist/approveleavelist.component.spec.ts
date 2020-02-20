import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveleavelistComponent } from './approveleavelist.component';

describe('ApproveleavelistComponent', () => {
  let component: ApproveleavelistComponent;
  let fixture: ComponentFixture<ApproveleavelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveleavelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveleavelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
