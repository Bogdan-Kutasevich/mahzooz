import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMobileNumberComponent } from './customer-mobile-number.component';

describe('CustomerMobileNumberComponent', () => {
  let component: CustomerMobileNumberComponent;
  let fixture: ComponentFixture<CustomerMobileNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerMobileNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerMobileNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
