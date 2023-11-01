import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mar212023Component } from './mar212023.component';

describe('Mar212023Component', () => {
  let component: Mar212023Component;
  let fixture: ComponentFixture<Mar212023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mar212023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mar212023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
