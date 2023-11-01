import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct012023Component } from './oct012023.component';

describe('Oct012023Component', () => {
  let component: Oct012023Component;
  let fixture: ComponentFixture<Oct012023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct012023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct012023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
