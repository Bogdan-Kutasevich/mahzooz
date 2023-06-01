import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseLanguagesComponent } from './choose-languages.component';

describe('ChooseLanguagesComponent', () => {
  let component: ChooseLanguagesComponent;
  let fixture: ComponentFixture<ChooseLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseLanguagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
