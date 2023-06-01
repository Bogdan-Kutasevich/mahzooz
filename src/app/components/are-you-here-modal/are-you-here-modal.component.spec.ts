import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreYouHereModalComponent } from './are-you-here-modal.component';

describe('AreYouHereModalComponent', () => {
  let component: AreYouHereModalComponent;
  let fixture: ComponentFixture<AreYouHereModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreYouHereModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreYouHereModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
