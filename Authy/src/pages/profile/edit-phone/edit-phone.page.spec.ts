import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPhonePage } from './edit-phone.page';

describe('EditPhonePage', () => {
  let component: EditPhonePage;
  let fixture: ComponentFixture<EditPhonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPhonePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPhonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
