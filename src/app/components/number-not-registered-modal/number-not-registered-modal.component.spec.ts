import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberNotRegisteredModalComponent } from './number-not-registered-modal.component';

describe('NumberNotRegisteredModalComponent', () => {
  let component: NumberNotRegisteredModalComponent;
  let fixture: ComponentFixture<NumberNotRegisteredModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberNotRegisteredModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberNotRegisteredModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
