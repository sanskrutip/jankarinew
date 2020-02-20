import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiSancharakDetailsComponent } from './idi-sancharak-details.component';

describe('IdiSancharakDetailsComponent', () => {
  let component: IdiSancharakDetailsComponent;
  let fixture: ComponentFixture<IdiSancharakDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdiSancharakDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiSancharakDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
