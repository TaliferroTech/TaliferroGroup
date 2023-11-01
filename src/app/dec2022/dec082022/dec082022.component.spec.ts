import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dec082022Component } from './dec082022.component';

describe('Dec082022Component', () => {
  let component: Dec082022Component;
  let fixture: ComponentFixture<Dec082022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dec082022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dec082022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
