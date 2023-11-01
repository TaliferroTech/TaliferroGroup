import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct272023Component } from './oct272023.component';

describe('Oct272023Component', () => {
  let component: Oct272023Component;
  let fixture: ComponentFixture<Oct272023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct272023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct272023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
