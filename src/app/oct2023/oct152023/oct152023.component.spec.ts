import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct152023Component } from './oct152023.component';

describe('Oct152023Component', () => {
  let component: Oct152023Component;
  let fixture: ComponentFixture<Oct152023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct152023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct152023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
