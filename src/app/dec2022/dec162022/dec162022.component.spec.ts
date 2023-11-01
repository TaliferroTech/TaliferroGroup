import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dec162022Component } from './dec162022.component';

describe('Dec162022Component', () => {
  let component: Dec162022Component;
  let fixture: ComponentFixture<Dec162022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dec162022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dec162022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
