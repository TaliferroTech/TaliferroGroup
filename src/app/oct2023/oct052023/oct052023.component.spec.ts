import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct052023Component } from './oct052023.component';

describe('Oct052023Component', () => {
  let component: Oct052023Component;
  let fixture: ComponentFixture<Oct052023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct052023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct052023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
