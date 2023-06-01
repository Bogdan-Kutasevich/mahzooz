import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractPageComponent } from './abstract-page.component';

describe('AbstractPageComponent', () => {
  let component: AbstractPageComponent;
  let fixture: ComponentFixture<AbstractPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstractPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbstractPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
