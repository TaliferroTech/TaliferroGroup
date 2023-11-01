import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dec212022Component } from './dec212022.component';

describe('Dec212022Component', () => {
  let component: Dec212022Component;
  let fixture: ComponentFixture<Dec212022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dec212022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dec212022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
