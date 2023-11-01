import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dec092022Component } from './dec092022.component';

describe('Dec092022Component', () => {
  let component: Dec092022Component;
  let fixture: ComponentFixture<Dec092022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dec092022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dec092022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
