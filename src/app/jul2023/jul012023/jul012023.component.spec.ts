import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jul012023Component } from './jul012023.component';

describe('Jul012023Component', () => {
  let component: Jul012023Component;
  let fixture: ComponentFixture<Jul012023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jul012023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jul012023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
