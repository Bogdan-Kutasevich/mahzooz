import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidOtpComponent } from './invalid-otp.component';

describe('InvalidOtpComponent', () => {
  let component: InvalidOtpComponent;
  let fixture: ComponentFixture<InvalidOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidOtpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvalidOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
