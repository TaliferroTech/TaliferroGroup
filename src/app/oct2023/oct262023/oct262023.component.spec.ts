import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct262023Component } from './oct262023.component';

describe('Oct262023Component', () => {
  let component: Oct262023Component;
  let fixture: ComponentFixture<Oct262023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct262023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct262023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
