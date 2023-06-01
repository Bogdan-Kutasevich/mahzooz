import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaximumTriesExceededComponent } from './maximum-tries-exceeded.component';

describe('MaximumTriesExceededComponent', () => {
  let component: MaximumTriesExceededComponent;
  let fixture: ComponentFixture<MaximumTriesExceededComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaximumTriesExceededComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaximumTriesExceededComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
