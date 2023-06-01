import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseCounterComponent } from './reverse-counter.component';

describe('ReverseCounterComponent', () => {
  let component: ReverseCounterComponent;
  let fixture: ComponentFixture<ReverseCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReverseCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReverseCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
