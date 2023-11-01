import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jul042023Component } from './jul042023.component';

describe('Jul042023Component', () => {
  let component: Jul042023Component;
  let fixture: ComponentFixture<Jul042023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jul042023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jul042023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
