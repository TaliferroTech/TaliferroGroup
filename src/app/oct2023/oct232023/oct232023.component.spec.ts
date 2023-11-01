import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct232023Component } from './oct232023.component';

describe('Oct232023Component', () => {
  let component: Oct232023Component;
  let fixture: ComponentFixture<Oct232023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct232023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct232023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
