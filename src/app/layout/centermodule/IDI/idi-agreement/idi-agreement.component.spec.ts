import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiAgreementComponent } from './idi-agreement.component';

describe('IdiAgreementComponent', () => {
  let component: IdiAgreementComponent;
  let fixture: ComponentFixture<IdiAgreementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdiAgreementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
