import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyJankariComponent } from './my-jankari.component';

describe('MyJankariComponent', () => {
  let component: MyJankariComponent;
  let fixture: ComponentFixture<MyJankariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyJankariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyJankariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
