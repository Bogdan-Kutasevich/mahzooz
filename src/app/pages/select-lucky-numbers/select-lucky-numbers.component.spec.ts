import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLuckyNumbersComponent } from './select-lucky-numbers.component';

describe('SelectLuckyNumbersComponent', () => {
  let component: SelectLuckyNumbersComponent;
  let fixture: ComponentFixture<SelectLuckyNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectLuckyNumbersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectLuckyNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
