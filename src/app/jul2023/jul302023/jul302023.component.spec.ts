import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jul302023Component } from './jul302023.component';

describe('Jul302023Component', () => {
  let component: Jul302023Component;
  let fixture: ComponentFixture<Jul302023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jul302023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jul302023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
