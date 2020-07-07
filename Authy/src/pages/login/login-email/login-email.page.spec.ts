import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEmailPage } from './login-email.page';

describe('LoginEmailPage', () => {
  let component: LoginEmailPage;
  let fixture: ComponentFixture<LoginEmailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginEmailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
