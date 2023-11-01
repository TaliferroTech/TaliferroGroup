import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct302023Component } from './oct302023.component';

describe('Oct302023Component', () => {
  let component: Oct302023Component;
  let fixture: ComponentFixture<Oct302023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct302023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct302023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
