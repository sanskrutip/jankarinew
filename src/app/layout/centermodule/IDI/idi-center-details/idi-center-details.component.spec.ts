import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiCenterDetailsComponent } from './idi-center-details.component';

describe('IdiCenterDetailsComponent', () => {
  let component: IdiCenterDetailsComponent;
  let fixture: ComponentFixture<IdiCenterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdiCenterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiCenterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
