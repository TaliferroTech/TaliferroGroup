import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dec262022Component } from './dec262022.component';

describe('Dec262022Component', () => {
  let component: Dec262022Component;
  let fixture: ComponentFixture<Dec262022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dec262022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dec262022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
