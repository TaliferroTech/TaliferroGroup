import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct212023Component } from './oct212023.component';

describe('Oct212023Component', () => {
  let component: Oct212023Component;
  let fixture: ComponentFixture<Oct212023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct212023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct212023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
