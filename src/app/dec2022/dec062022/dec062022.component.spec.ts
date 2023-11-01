import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dec062022Component } from './dec062022.component';

describe('Dec062022Component', () => {
  let component: Dec062022Component;
  let fixture: ComponentFixture<Dec062022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dec062022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dec062022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
