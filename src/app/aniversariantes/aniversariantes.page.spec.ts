import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AniversariantesPage } from './aniversariantes.page';

describe('AniversariantesPage', () => {
  let component: AniversariantesPage;
  let fixture: ComponentFixture<AniversariantesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AniversariantesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AniversariantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
