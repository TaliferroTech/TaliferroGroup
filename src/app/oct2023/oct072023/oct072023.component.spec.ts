import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct072023Component } from './oct072023.component';

describe('Oct072023Component', () => {
  let component: Oct072023Component;
  let fixture: ComponentFixture<Oct072023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct072023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct072023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
