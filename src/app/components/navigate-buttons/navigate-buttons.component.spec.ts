import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateButtonsComponent } from './navigate-buttons.component';

describe('NavigateButtonsComponent', () => {
  let component: NavigateButtonsComponent;
  let fixture: ComponentFixture<NavigateButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigateButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigateButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
