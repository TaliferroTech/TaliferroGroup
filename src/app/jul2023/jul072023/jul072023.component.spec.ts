import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jul072023Component } from './jul072023.component';

describe('Jul072023Component', () => {
  let component: Jul072023Component;
  let fixture: ComponentFixture<Jul072023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jul072023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jul072023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
