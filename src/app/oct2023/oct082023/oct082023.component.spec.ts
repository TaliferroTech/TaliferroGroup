import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct082023Component } from './oct082023.component';

describe('Oct082023Component', () => {
  let component: Oct082023Component;
  let fixture: ComponentFixture<Oct082023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct082023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct082023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
