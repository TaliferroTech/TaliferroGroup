import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jul132023Component } from './jul132023.component';

describe('Jul132023Component', () => {
  let component: Jul132023Component;
  let fixture: ComponentFixture<Jul132023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jul132023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jul132023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
