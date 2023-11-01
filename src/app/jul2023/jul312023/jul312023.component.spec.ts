import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jul312023Component } from './jul312023.component';

describe('Jul312023Component', () => {
  let component: Jul312023Component;
  let fixture: ComponentFixture<Jul312023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jul312023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jul312023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
