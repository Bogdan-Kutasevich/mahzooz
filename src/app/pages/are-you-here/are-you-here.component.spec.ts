import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreYouHereComponent } from './are-you-here.component';

describe('AreYouHereComponent', () => {
  let component: AreYouHereComponent;
  let fixture: ComponentFixture<AreYouHereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreYouHereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreYouHereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
