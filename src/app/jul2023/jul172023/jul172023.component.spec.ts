import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jul172023Component } from './jul172023.component';

describe('Jul172023Component', () => {
  let component: Jul172023Component;
  let fixture: ComponentFixture<Jul172023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jul172023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jul172023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
