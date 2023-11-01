import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct282023Component } from './oct282023.component';

describe('Oct282023Component', () => {
  let component: Oct282023Component;
  let fixture: ComponentFixture<Oct282023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct282023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct282023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
