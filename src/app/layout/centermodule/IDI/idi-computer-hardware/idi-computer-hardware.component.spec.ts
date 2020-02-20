import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiComputerHardwareComponent } from './idi-computer-hardware.component';

describe('IdiComputerHardwareComponent', () => {
  let component: IdiComputerHardwareComponent;
  let fixture: ComponentFixture<IdiComputerHardwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdiComputerHardwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiComputerHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
