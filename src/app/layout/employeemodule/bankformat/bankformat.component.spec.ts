import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankformatComponent } from './bankformat.component';

describe('BankformatComponent', () => {
  let component: BankformatComponent;
  let fixture: ComponentFixture<BankformatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankformatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankformatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
