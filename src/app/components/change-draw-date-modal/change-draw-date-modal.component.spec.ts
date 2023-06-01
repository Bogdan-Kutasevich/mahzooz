import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDrawDateModalComponent } from './change-draw-date-modal.component';

describe('ChangeDrawDateModalComponent', () => {
  let component: ChangeDrawDateModalComponent;
  let fixture: ComponentFixture<ChangeDrawDateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDrawDateModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDrawDateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
