import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiCenterlistComponent } from './idi-centerlist.component';

describe('IdiCenterlistComponent', () => {
  let component: IdiCenterlistComponent;
  let fixture: ComponentFixture<IdiCenterlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdiCenterlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiCenterlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
