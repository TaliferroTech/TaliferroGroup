import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dec102022Component } from './dec102022.component';

describe('Dec102022Component', () => {
  let component: Dec102022Component;
  let fixture: ComponentFixture<Dec102022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dec102022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dec102022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
