import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneAuthPage } from './phone-auth.page';

describe('PhoneAuthPage', () => {
  let component: PhoneAuthPage;
  let fixture: ComponentFixture<PhoneAuthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneAuthPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneAuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
