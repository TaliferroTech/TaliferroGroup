import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jul102023Component } from './jul102023.component';

describe('Jul102023Component', () => {
  let component: Jul102023Component;
  let fixture: ComponentFixture<Jul102023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jul102023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jul102023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
