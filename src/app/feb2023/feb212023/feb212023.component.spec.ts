import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb212023Component } from './feb212023.component';

describe('Feb212023Component', () => {
  let component: Feb212023Component;
  let fixture: ComponentFixture<Feb212023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feb212023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feb212023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
