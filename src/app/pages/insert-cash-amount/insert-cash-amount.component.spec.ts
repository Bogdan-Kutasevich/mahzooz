import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCashAmountComponent } from './insert-cash-amount.component';

describe('InsertCashAmountComponent', () => {
  let component: InsertCashAmountComponent;
  let fixture: ComponentFixture<InsertCashAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertCashAmountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertCashAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
