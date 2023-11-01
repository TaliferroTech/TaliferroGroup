import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aug232023Component } from './aug232023.component';

describe('Aug232023Component', () => {
  let component: Aug232023Component;
  let fixture: ComponentFixture<Aug232023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aug232023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aug232023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
