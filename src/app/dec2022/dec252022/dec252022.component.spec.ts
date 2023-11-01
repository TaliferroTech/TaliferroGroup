import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dec252022Component } from './dec252022.component';

describe('Dec252022Component', () => {
  let component: Dec252022Component;
  let fixture: ComponentFixture<Dec252022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dec252022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dec252022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
