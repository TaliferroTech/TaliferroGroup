import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jul232023Component } from './jul232023.component';

describe('Jul232023Component', () => {
  let component: Jul232023Component;
  let fixture: ComponentFixture<Jul232023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jul232023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jul232023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
