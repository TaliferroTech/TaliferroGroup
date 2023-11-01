import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aug282023Component } from './aug282023.component';

describe('Aug282023Component', () => {
  let component: Aug282023Component;
  let fixture: ComponentFixture<Aug282023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aug282023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aug282023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
