import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberAlreadyExistModalComponent } from './number-already-exist-modal.component';

describe('NumberAlreadyExistModalComponent', () => {
  let component: NumberAlreadyExistModalComponent;
  let fixture: ComponentFixture<NumberAlreadyExistModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberAlreadyExistModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberAlreadyExistModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
