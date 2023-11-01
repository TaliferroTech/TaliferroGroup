import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aug212023Component } from './aug212023.component';

describe('Aug212023Component', () => {
  let component: Aug212023Component;
  let fixture: ComponentFixture<Aug212023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aug212023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aug212023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
