import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dec202022Component } from './dec202022.component';

describe('Dec202022Component', () => {
  let component: Dec202022Component;
  let fixture: ComponentFixture<Dec202022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dec202022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dec202022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
