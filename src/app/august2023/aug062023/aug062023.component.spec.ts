import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aug062023Component } from './aug062023.component';

describe('Aug062023Component', () => {
  let component: Aug062023Component;
  let fixture: ComponentFixture<Aug062023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aug062023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aug062023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
