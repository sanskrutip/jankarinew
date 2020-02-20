import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiCenterCourseComponent } from './idi-center-course.component';

describe('IdiCenterCourseComponent', () => {
  let component: IdiCenterCourseComponent;
  let fixture: ComponentFixture<IdiCenterCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdiCenterCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiCenterCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
