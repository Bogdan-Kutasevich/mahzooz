import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveCommunicationOnSuccessfulRegistrationComponent } from './receive-communication-on-successful-registration.component';

describe('RecieveCommunicationOnSuccessfulRegistrationComponent', () => {
  let component: ReceiveCommunicationOnSuccessfulRegistrationComponent;
  let fixture: ComponentFixture<ReceiveCommunicationOnSuccessfulRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiveCommunicationOnSuccessfulRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiveCommunicationOnSuccessfulRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
