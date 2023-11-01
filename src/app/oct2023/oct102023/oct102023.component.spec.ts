import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct102023Component } from './oct102023.component';

describe('Oct102023Component', () => {
  let component: Oct102023Component;
  let fixture: ComponentFixture<Oct102023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct102023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct102023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
