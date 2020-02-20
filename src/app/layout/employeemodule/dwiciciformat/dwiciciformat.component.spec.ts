import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DwiciciformatComponent } from './dwiciciformat.component';

describe('DwiciciformatComponent', () => {
  let component: DwiciciformatComponent;
  let fixture: ComponentFixture<DwiciciformatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwiciciformatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwiciciformatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
