import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyWaterBottleComponent } from './buy-water-bottle.component';

describe('BuyWaterBottleComponent', () => {
  let component: BuyWaterBottleComponent;
  let fixture: ComponentFixture<BuyWaterBottleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyWaterBottleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyWaterBottleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
