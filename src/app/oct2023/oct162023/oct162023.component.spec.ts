import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct162023Component } from './oct162023.component';

describe('Oct162023Component', () => {
  let component: Oct162023Component;
  let fixture: ComponentFixture<Oct162023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct162023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct162023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
