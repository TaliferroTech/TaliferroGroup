import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jan182023Component } from './jan182023.component';

describe('Jan182023Component', () => {
  let component: Jan182023Component;
  let fixture: ComponentFixture<Jan182023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jan182023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jan182023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
