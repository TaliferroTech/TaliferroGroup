import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dec272022Component } from './dec272022.component';

describe('Dec272022Component', () => {
  let component: Dec272022Component;
  let fixture: ComponentFixture<Dec272022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dec272022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dec272022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
