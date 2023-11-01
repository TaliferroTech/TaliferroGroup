import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct092023Component } from './oct092023.component';

describe('Oct092023Component', () => {
  let component: Oct092023Component;
  let fixture: ComponentFixture<Oct092023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct092023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct092023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
