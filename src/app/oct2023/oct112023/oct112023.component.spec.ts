import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct112023Component } from './oct112023.component';

describe('Oct112023Component', () => {
  let component: Oct112023Component;
  let fixture: ComponentFixture<Oct112023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct112023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct112023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
