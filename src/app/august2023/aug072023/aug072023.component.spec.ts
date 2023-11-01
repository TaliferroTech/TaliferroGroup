import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aug072023Component } from './aug072023.component';

describe('Aug072023Component', () => {
  let component: Aug072023Component;
  let fixture: ComponentFixture<Aug072023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aug072023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aug072023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
