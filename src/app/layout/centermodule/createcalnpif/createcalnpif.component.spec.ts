import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecalnpifComponent } from './createcalnpif.component';

describe('CreatecalnpifComponent', () => {
  let component: CreatecalnpifComponent;
  let fixture: ComponentFixture<CreatecalnpifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecalnpifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecalnpifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
