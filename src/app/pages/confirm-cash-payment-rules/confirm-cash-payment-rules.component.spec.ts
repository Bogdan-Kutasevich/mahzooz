import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCashPaymentRulesComponent } from './confirm-cash-payment-rules.component';

describe('ConfirmCashPaymentRulesComponent', () => {
  let component: ConfirmCashPaymentRulesComponent;
  let fixture: ComponentFixture<ConfirmCashPaymentRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmCashPaymentRulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmCashPaymentRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
