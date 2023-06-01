import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGameModalComponent } from './my-game-modal.component';

describe('MyGameModalComponent', () => {
  let component: MyGameModalComponent;
  let fixture: ComponentFixture<MyGameModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGameModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyGameModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
