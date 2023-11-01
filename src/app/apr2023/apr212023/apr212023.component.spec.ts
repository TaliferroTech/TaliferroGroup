import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr212023Component } from './apr212023.component';

describe('Apr212023Component', () => {
  let component: Apr212023Component;
  let fixture: ComponentFixture<Apr212023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr212023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apr212023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
