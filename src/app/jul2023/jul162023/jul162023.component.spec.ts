import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jul162023Component } from './jul162023.component';

describe('Jul162023Component', () => {
  let component: Jul162023Component;
  let fixture: ComponentFixture<Jul162023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jul162023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jul162023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
