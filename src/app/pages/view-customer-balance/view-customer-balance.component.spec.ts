import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomerBalanceComponent } from './view-customer-balance.component';

describe('ViewCustomerBalanceComponent', () => {
  let component: ViewCustomerBalanceComponent;
  let fixture: ComponentFixture<ViewCustomerBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCustomerBalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCustomerBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
