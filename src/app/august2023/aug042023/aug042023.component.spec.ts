import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aug042023Component } from './aug042023.component';

describe('Aug042023Component', () => {
  let component: Aug042023Component;
  let fixture: ComponentFixture<Aug042023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aug042023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aug042023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
