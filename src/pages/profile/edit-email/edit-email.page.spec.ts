import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmailPage } from './edit-email.page';

describe('EditEmailPage', () => {
  let component: EditEmailPage;
  let fixture: ComponentFixture<EditEmailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
