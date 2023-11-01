import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dec222022Component } from './dec222022.component';

describe('Dec222022Component', () => {
  let component: Dec222022Component;
  let fixture: ComponentFixture<Dec222022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dec222022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dec222022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
