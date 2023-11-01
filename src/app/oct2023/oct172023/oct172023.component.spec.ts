import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct172023Component } from './oct172023.component';

describe('Oct172023Component', () => {
  let component: Oct172023Component;
  let fixture: ComponentFixture<Oct172023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct172023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct172023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
