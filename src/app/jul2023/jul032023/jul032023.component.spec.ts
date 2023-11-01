import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jul032023Component } from './jul032023.component';

describe('Jul032023Component', () => {
  let component: Jul032023Component;
  let fixture: ComponentFixture<Jul032023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jul032023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jul032023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
