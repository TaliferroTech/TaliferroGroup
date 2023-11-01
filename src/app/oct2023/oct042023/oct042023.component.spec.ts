import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct042023Component } from './oct042023.component';

describe('Oct042023Component', () => {
  let component: Oct042023Component;
  let fixture: ComponentFixture<Oct042023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct042023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct042023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
