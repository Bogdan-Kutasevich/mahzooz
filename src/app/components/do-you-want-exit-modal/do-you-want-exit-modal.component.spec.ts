import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoYouWantExitModalComponent } from './do-you-want-exit-modal.component';

describe('DoYouWantExitModalComponent', () => {
  let component: DoYouWantExitModalComponent;
  let fixture: ComponentFixture<DoYouWantExitModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoYouWantExitModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoYouWantExitModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
