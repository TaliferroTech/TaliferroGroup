import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct182023Component } from './oct182023.component';

describe('Oct182023Component', () => {
  let component: Oct182023Component;
  let fixture: ComponentFixture<Oct182023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct182023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct182023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
