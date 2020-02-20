import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalnpifComponent } from './calnpif.component';

describe('CalnpifComponent', () => {
  let component: CalnpifComponent;
  let fixture: ComponentFixture<CalnpifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalnpifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalnpifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
