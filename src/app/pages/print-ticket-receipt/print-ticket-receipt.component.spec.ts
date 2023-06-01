import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintTicketReceiptComponent } from './print-ticket-receipt.component';

describe('PrintTicketReceiptComponent', () => {
  let component: PrintTicketReceiptComponent;
  let fixture: ComponentFixture<PrintTicketReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintTicketReceiptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintTicketReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
