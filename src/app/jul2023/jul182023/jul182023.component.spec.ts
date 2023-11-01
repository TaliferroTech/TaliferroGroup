import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jul182023Component } from './jul182023.component';

describe('Jul182023Component', () => {
  let component: Jul182023Component;
  let fixture: ComponentFixture<Jul182023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jul182023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jul182023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
