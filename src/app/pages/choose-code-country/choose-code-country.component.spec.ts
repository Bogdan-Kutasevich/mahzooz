import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseCodeCountryComponent } from './choose-code-country.component';

describe('ChooseCodeCountryComponent', () => {
  let component: ChooseCodeCountryComponent;
  let fixture: ComponentFixture<ChooseCodeCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseCodeCountryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseCodeCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
