import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dec042022Component } from './dec042022.component';

describe('Dec042022Component', () => {
  let component: Dec042022Component;
  let fixture: ComponentFixture<Dec042022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dec042022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dec042022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
