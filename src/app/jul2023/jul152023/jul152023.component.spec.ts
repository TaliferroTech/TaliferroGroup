import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jul152023Component } from './jul152023.component';

describe('Jul152023Component', () => {
  let component: Jul152023Component;
  let fixture: ComponentFixture<Jul152023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jul152023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jul152023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
