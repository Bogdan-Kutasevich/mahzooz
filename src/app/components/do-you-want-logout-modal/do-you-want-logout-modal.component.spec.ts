import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoYouWantLogoutModalComponent } from './do-you-want-logout-modal.component';

describe('DoYouWantLogoutModalComponent', () => {
  let component: DoYouWantLogoutModalComponent;
  let fixture: ComponentFixture<DoYouWantLogoutModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoYouWantLogoutModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoYouWantLogoutModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
