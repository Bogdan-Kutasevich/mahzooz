import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateCustomerMobileNumberComponent } from './validate-customer-mobile-number.component';

describe('ValidateCustomerMobileNumberComponent', () => {
  let component: ValidateCustomerMobileNumberComponent;
  let fixture: ComponentFixture<ValidateCustomerMobileNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateCustomerMobileNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidateCustomerMobileNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
