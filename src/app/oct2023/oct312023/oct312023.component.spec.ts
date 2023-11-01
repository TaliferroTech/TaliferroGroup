import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct312023Component } from './oct312023.component';

describe('Oct312023Component', () => {
  let component: Oct312023Component;
  let fixture: ComponentFixture<Oct312023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct312023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct312023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
