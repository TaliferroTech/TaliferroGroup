import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jul212023Component } from './jul212023.component';

describe('Jul212023Component', () => {
  let component: Jul212023Component;
  let fixture: ComponentFixture<Jul212023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jul212023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jul212023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
