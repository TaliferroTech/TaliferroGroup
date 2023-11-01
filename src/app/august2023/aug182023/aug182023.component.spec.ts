import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aug182023Component } from './aug182023.component';

describe('Aug182023Component', () => {
  let component: Aug182023Component;
  let fixture: ComponentFixture<Aug182023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aug182023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aug182023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
