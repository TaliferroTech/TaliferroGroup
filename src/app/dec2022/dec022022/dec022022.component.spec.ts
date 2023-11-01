import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dec022022Component } from './dec022022.component';

describe('Dec022022Component', () => {
  let component: Dec022022Component;
  let fixture: ComponentFixture<Dec022022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dec022022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dec022022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
