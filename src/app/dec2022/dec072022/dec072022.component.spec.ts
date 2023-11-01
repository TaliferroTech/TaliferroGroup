import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dec072022Component } from './dec072022.component';

describe('Dec072022Component', () => {
  let component: Dec072022Component;
  let fixture: ComponentFixture<Dec072022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dec072022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dec072022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
