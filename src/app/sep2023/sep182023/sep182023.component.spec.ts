import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sep182023Component } from './sep182023.component';

describe('Sep182023Component', () => {
  let component: Sep182023Component;
  let fixture: ComponentFixture<Sep182023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sep182023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sep182023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
